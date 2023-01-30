import { Card } from "@/components/Card";
import { Category } from "@/components/categories/Category";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import axios from "axios";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useState } from "react";

const Admin = ({ token }) => {
  const [category, setCategory] = useState("");
  return (
    <>
      <Head>
        <title>Dashboard | Admin</title>
      </Head>

      <Header />
      <div className="min-h-screen flex gap-10">
        <Dashboard setCategory={setCategory} />

        <div className="flex-1 flex flex-col gap-10 p-10">
          <div className="flex-1 flex flex-col gap-10">
            {category === "pixel" && <Category label="Pixel" token={token} />}
            {category === "users" && <Category label="Users" token={token} />}
            {category === "maps" && <Category label="Maps" token={token} />}
            {category === "games" && <Category label="Games" token={token} />}
            {category === "agents" && <Category label="Agents" />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;

export const getServerSideProps = async (context) => {
  const { "nextauth.token": token } = parseCookies(context);

  try {
    const response = await axios.get(process.env.BASE_URL + "/users/token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const isAdmin = response.data?.role;

    if (isAdmin !== "ROLE_ADMIN") {
      return {
        redirect: {
          destination: "/not-authorized",
          permanent: false,
        },
      };
    }

    return {
      props: {
        user: isAdmin,
        token,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/not-authorized",
        permanent: false,
      },
      props: {
        user: null,
        token,
      },
    };
  }
};
