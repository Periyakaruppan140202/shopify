import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItems,
  minusQuantity,
  plusQuantity,
  selectLength,
} from "../slices/cartSlice";

const CheckOutProduct = ({ id, title, price, description, image, qty }) => {
  const url = "https://shopify-seller-backend.herokuapp.com/image/";
  const dispatch = useDispatch();
  //   const addItemToCart = () => {
  //     const product = { id, title, price, description, image };
  //     dispatch(addToCart(product));
  //   };
  const removeItemFromCart = () => {
    if (confirm("Do you want to Remove this item from the cart?")) {
      dispatch(removeFromCart({ id }));
    } else {
    }
  };
  return (
    <div className="grid grid-cols-5 border-b pb-4">
      {/* Left */}
      <Image
        src={`${url}${image}`}
        height={200}
        width={200}
        objectFit="contain"
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p className="line-clamp-2">{title}</p>
        <p className="invisible sm:visible text-xs sm:my-2 -my-2 line-clamp-3">
          {description}
        </p>
        <div className="sm:flex sm:my-5">
          <span className="text-xs my-auto">Qty: </span>
          <span className="mx-2 py-1 text-xs border rounded-md my-auto bg-gray-200 shadow-lg select-none">
            <MinusCircleIcon
              height={20}
              className={`inline pl-1 pr-2 active:border ${
                qty <= 1 ? "cursor-not-allowed" : ""
              }`}
              onClick={(e) => {
                if (qty <= 1) {
                  e.preventDefault();
                } else {
                  dispatch(minusQuantity({ id }));
                }
              }}
            />
            {qty}
            <PlusCircleIcon
              height={20}
              className={`inline pl-2 pr-1 active:border ${
                qty >= 5 ? "cursor-not-allowed disabled" : ""
              }`}
              disabled={qty >= 5}
              onClick={(e) => {
                if (qty >= 5) {
                  e.preventDefault();
                } else {
                  dispatch(plusQuantity({ id }));
                }
              }}
            />
          </span>
          <button
            className="redbutton flex sm:my-auto mt-5 sm:ml-5 shadow-lg"
            onClick={removeItemFromCart}
          >
            <TrashIcon height={15} className="inline my-auto" /> Delete
          </button>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col justify-self-end whitespace-nowrap font-bold">
        <Currency quantity={price} currency="INR" />
        {/* <button className="button" onClick={addItemToCart}>
          Add to Cart
        </button>
         */}
      </div>
    </div>
  );
};

export default CheckOutProduct;
