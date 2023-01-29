import { Card } from "@/components/Card";
import Head from "next/head";
import { AiFillEye } from "react-icons/ai";
import { cardInfos } from "@/data/api";
import { DetailsContainer } from "@/components/DetailsContainer";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const cardIndex = cardInfos.map((card) => ({
    id: card.id,
    map_name: card.map_name,
    avatar: card.avatar,
    name: card.name,
    description: card.description,
    views: card.views,
    image: card.image,
  }));

  const idCard = cardIndex.find((card) => card.id.toString() === id.toString());

  console.log(id);

  return {
    props: {
      cardMap: idCard || null,
    },
  };
}

export default function Maps({ id, cardMap }) {
  console.log(cardMap);
  return (
    <div>
      <Head>
        <title>Valorant Zone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <DetailsContainer cardMap={cardMap} />
      </main>
    </div>
  );
}
