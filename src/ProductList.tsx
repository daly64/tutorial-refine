import { useList } from "@refinedev/core";
import { IProduct } from "./interfaces/IProduct";

function ProductList() {
  const { data, error, isError, isLoading } = useList<IProduct>({
    resource: "products",
  });

  if (isError) <h1>{error?.message}</h1>;
  if (isLoading) <h1>Loading...</h1>;

  const products = data?.data ?? [];
  const total = data?.total ?? 0;

  return (
    <div>
      Product List
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>
              {product.id} - ({product.name})
            </h4>
          </li>
        ))}
      </ul>
      <h5>{total}</h5>
    </div>
  );
}

export default ProductList;
