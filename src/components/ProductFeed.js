import React from "react";
import Product from "./Product";
const ProductFeed = ({ products, search }) => {
  products = products.sort(() => Math.random() - 0.5);
  const newProducts = products.filter((item) =>
    item.title.toLowerCase().startsWith(search.toLowerCase())
  );
  console.log(newProducts);
  return (
    <div className="sm:-mt-32 mx-auto lg:-mt-52 grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {newProducts
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
      <div className="sm:col-span-2">
        {newProducts
          .slice(4, 5)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
      </div>
      {newProducts
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
