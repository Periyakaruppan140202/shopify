import React from "react";
import { useSelector } from "react-redux";
import CheckOutProduct from "../components/CheckOutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal, selectLength } from "../slices/cartSlice";
import emptycart from "../../public/images/emptycart.png";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

const Checkout = () => {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const length = useSelector(selectLength);
  const total = useSelector(selectTotal);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-md">
          <div className="flex flex-col p-5 space-y-4 bg-white relative">
            {/* <h1 className="text-3xl border-b pb-4 text-center"> */}
            {length === 0 ? (
              <Image
                src={emptycart}
                width={500}
                height={500}
                objectFit="contain"
                alt="Your Cart is Empty!"
              />
            ) : (
              <>
                <h1 className="text-3xl border-b pb-4">Shopping Cart</h1>
                <h2 className="absolute right-10 top-8">Price</h2>
              </>
            )}
            {/* </h1> */}
            {items.map((item, i) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.image}
                qty={item.qty}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div
          className={`flex flex-col bg-white shadow-md ${
            length > 0 ? "m-5 p-5" : ""
          } lg:ml-0`}
        >
          {length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({length} {length === 1 ? "item" : "items"}
                ):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="INR" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 whitespace-nowrap ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to Buy"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
