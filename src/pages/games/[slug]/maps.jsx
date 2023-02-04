import { ContainerCard } from "@/components/ContainerCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

const Maps = ({ game }) => {
  const router = useRouter();

  console.log(game);
  return (
    <>
      <Head>
        <title>Valorant pixel</title>
        <meta name="description" content="Valorant pixel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="container mx-auto px-6 py-3 flex flex-col md:flex-row gap-28 my-10">
        <Sidebar />
        <ContainerCard game={game} isGame />
      </main>
      <Footer />
    </>
  );
};

export default Maps;

export async function getServerSideProps(context) {
  const { slug } = context.params;

  console.log(slug);

  const { data } = await axios.get(
    `${process.env.BASE_URL}/games/${slug}/maps`
  );

  return {
    props: {
      game: data,
    },
  };
}
