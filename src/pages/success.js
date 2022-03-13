import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Head from "next/head";
const success = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Ordered Successfully - Shopify</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            item has shipped, if you would like to check the status of your
            order(s) press the link below.
          </p>
          <div className="flex">
            <button
              onClick={() => {
                router.push("/orders");
              }}
              className="button mt-8 mr-5 flex-grow"
            >
              Go to my orders
            </button>
            <button
              onClick={() => {
                router.push("/");
              }}
              className="button mt-8 ml-5 flex-grow"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default success;
