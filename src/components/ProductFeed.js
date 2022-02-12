import React, { useState, useEffect } from "react";
import Product from "./Product";

const ProductFeed = ({ products, search }) => {
  products = products.sort(() => Math.random() - 0.5);
  // const newProducts = products.filter((item) =>
  //   item.title.toLowerCase().startsWith(search.toLowerCase())
  // );
  let newProducts = products.filter(
    (x) =>
      x.title.toLowerCase().includes(search.toLowerCase()) ||
      x.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div
      className={`${
        search === "" ? "sm:-mt-32 lg:-mt-52" : ""
      } mx-auto grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
    >
      {newProducts
        .slice(0, 4)
        .map(({ id, title, price, description, image }) => (
          <Product
            key={id}
            image={image}
            title={title}
            price={price}
            description={description}
          />
        ))}
      <div className="sm:col-span-2">
        {newProducts
          .slice(4, 5)
          .map(({ id, title, price, description, image }) => (
            <Product
              key={id}
              image={image}
              title={title}
              price={price}
              description={description}
            />
          ))}
      </div>
      {newProducts
        .slice(5, products.length)
        .map(({ id, title, price, description, image }) => (
          <Product
            key={id}
            image={image}
            title={title}
            price={price}
            description={description}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
