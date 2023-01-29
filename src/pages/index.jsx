import Head from "next/head";
import React from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ContainerCard } from "@/components/ContainerCard";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/Contexts/AuthProvider";

export default function Home() {
  const { user } = useAuth();

  console.log(user);

  return (
    <>
      <Head>
        <title>Valorant pixel</title>
        <meta name="description" content="Valorant pixel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto px-6 py-3 flex flex-col md:flex-row gap-28">
        <Sidebar />
        <ContainerCard />
      </main>
      <Footer />
    </>
  );
}

// export const ServerSideProps = async () => {
//   const { "nextauth.token": token } = parseCookies();

//   const response = axios.get(process.env.BASE_URL + "/users/token", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   console.log(response);

//   const data = await response.data;

//   return {
//     props: {
//       data,
//     },
//   };
// };
