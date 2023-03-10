import Head from "next/head";
import React from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ContainerCard } from "@/components/ContainerCard";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/Contexts/AuthProvider";

export default function Home() {
  const { user } = useAuth();

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
        <ContainerCard />
      </main>
      <Footer />
    </>
  );
}
