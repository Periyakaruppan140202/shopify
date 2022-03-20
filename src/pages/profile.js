import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/client";
const profile = () => {
  const [session] = useSession();
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>
          {session ? session.user.name + `'s Account` : "Sign in"} - Shopify
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          {session ? (
            <div className="flex flex-col flex-grow items-center space-y-5">
              {
                <Image
                  className="items-center rounded-full"
                  src={session.user.image}
                  width={100}
                  height={100}
                  objectFit="contain"
                ></Image>
              }
              <h1 className="text-3xl flex flex-col sm:inline items-center">
                <span>Welcome, </span>
                <span className="whitespace-nowrap font-bold ">
                  {session.user.name}
                </span>
              </h1>
              <button className="button w-52" onClick={signOut}>
                Sign Out
              </button>
            </div>
          ) : (
            <h1 className="text-3xl flex flex-col items-center space-y-5">
              <span className="items-center">Not Yet Signed In ?</span>
              <button className="button w-52" onClick={signIn}>
                Sign In
              </button>
            </h1>
          )}
        </div>
      </main>
    </div>
  );
};

export default profile;
