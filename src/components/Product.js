import React from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
const url = "https://shopify-seller-backend.herokuapp.com/image/";
const Product = ({ id, title, price, description, image }) => {
  const dispatch = useDispatch();
  const addItemtoCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      image,
      qty: 1,
    };
    //Sending Product to redux store via ation.payload
    dispatch(addToCart(product));
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <Image
        src={`${url}${image}`}
        height={200}
        width={200}
        objectFit="contain"
      />
      <h1 className="my-3 text-sm line-clamp-3">{title}</h1>
      <p className="text-xs my-2 font-light line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="INR" />
      </div>
      <button onClick={addItemtoCart} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
