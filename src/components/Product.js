import React from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h1 className="my-3 line-clamp-3">{title}</h1>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} />
      </div>
      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default Product;
