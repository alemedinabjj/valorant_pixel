import Head from "next/head";
import axios from "axios";
import React from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ContainerCard } from "@/components/ContainerCard";

export default function Home() {
  const [pixels, setPixels] = React.useState([]);

  return (
    <>
      <Head>
        <title>Valorant pixel</title>
        <meta name="description" content="Valorant pixel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto px-6 py-3 flex gap-28">
        <Sidebar />
        <ContainerCard />
      </main>
    </>
  );
}
