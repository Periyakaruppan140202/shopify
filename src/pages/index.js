import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { useState } from "react";

export default function Home({ products }) {
  let [search, setSearch] = useState("");
  return (
    <div className="bg-gray_color">
      <Head>
        <title>Shopify</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Header */}
      <Header search={search} setSearch={setSearch} />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        {search === "" ? <Banner /> : ""}
        {/* Product Feed */}
        <ProductFeed products={products} search={search} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch(
    "https://shopify-seller-backend.herokuapp.com/"
  ).then((res) => res.json());
  return {
    props: {
      products,
    },
  };
}
