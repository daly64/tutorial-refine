import React from "react";
import { IProduct } from "./interfaces/IProduct";
import { useOne } from "@refinedev/core";

function Product() {
  const { data, error, isError, isLoading } = useOne<IProduct>({
    resource: "products",
    id: 123,
  });

  if (isError) <h1>{error?.message}</h1>;
  if (isLoading) <h1>Loading...</h1>;

  const product = data?.data;
  return (
    <div>
      Product
      <h4>{product?.name}</h4>
      <p>Material: {product?.material}</p>
      <p>Price {product?.price}</p>
      
    </div>
  );
}

export default Product;
