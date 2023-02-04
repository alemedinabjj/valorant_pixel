import { Card } from "@/components/Card";
import { Category } from "@/components/categories/Category";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import axios from "axios";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useCallback, useEffect, useState } from "react";

const Admin = ({ token }) => {
  const [category, setCategory] = useState("");

  const [data, setData] = useState([]);
  const [dataMaps, setDataMaps] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPagesMaps, setTotalPagesMaps] = useState(0);
  const [totalElementsMaps, setTotalElementsMaps] = useState(0);
  const [totalElementsAgents, setTotalElementsAgents] = useState(0);
  const [agent, setAgent] = useState([]);

  const getData = useCallback(async () => {
    const response = await axios.get(
      process.env.BASE_URL + `/games?size=10&page=${page}&sort=id`
    );
    const data = response.data.content;
    const totalPages = response.data.totalPages;
    const totalElements = response.data.totalElements;

    setTotalElements(totalElements);
    setTotalPages(totalPages);
    setData(data);
    console.log(response);
  }, [page]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getDataMaps = useCallback(async () => {
    const response = await axios.get(
      process.env.BASE_URL + `/maps?size=10&page=${page}&sort=id`
    );
    const data = response.data.content;
    const totalPages = response.data.totalPages;
    const totalElements = response.data.totalElements;

    // setTotalElements(totalElements);
    // setTotalPages(totalPages);

    setTotalElementsMaps(totalElements);
    setTotalPagesMaps(totalPages);
    setDataMaps(data);
    console.log(response);
  }, [page]);

  useEffect(() => {
    getDataMaps();
  }, [getDataMaps]);

  const getAgent = useCallback(async () => {
    const response = await axios.get(process.env.BASE_URL + `/agents`);
    const data = response.data.content;
    const totalElements = response.data.totalElements;

    setTotalElementsAgents(totalElements);
    setAgent(data);
    console.log(response);
  }, [page]);

  useEffect(() => {
    getAgent();
  }, [getAgent]);

  return (
    <>
      <Head>
        <title>Dashboard | Admin</title>
      </Head>

      <Header />
      <div className="min-h-screen flex gap-10">
        <Dashboard
          setCategory={setCategory}
          totalElements={totalElements}
          totalElementsMaps={totalElementsMaps}
          totalElementsAgents={totalElementsAgents}
        />

        <div className="flex-1 flex flex-col gap-10 p-10">
          <div className="flex-1 flex flex-col gap-10">
            {category === "pixel" && (
              <Category
                label="Pixel"
                token={token}
                data={data}
                getData={getData}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                totalElements={totalElements}
              />
            )}
            {category === "users" && (
              <Category
                label="Users"
                token={token}
                data={data}
                getData={getData}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                totalElements={totalElements}
              />
            )}
            {category === "maps" && (
              <Category
                label="Maps"
                token={token}
                data={data}
                dataMaps={dataMaps}
                getData={getData}
                getDataMaps={getDataMaps}
                page={page}
                setPage={setPage}
                totalPages={totalPagesMaps}
                totalElements={totalElementsMaps}
              />
            )}
            {category === "games" && (
              <Category
                label="Games"
                token={token}
                data={data}
                getData={getData}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                totalElements={totalElements}
                getDataMaps={getDataMaps}
              />
            )}
            {category === "agents" && (
              <Category
                label="Agents"
                token={token}
                data={data}
                getData={getData}
                getDataMaps={getDataMaps}
                agent={agent}
                getAgent={getAgent}
                page={page}
                setPage={setPage}
                totalPages={totalPagesMaps}
                totalElements={totalElementsAgents}
              />
            )}
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
