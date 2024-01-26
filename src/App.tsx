import { Refine } from "@refinedev/core";

import "./App.css";
import options from "./options";
import { dataProvider } from "./providers/dataProvider";
import Product from "./Product";
import ProductList from "./ProductList";

function App() {
  return (
    <Refine dataProvider={dataProvider} options={options}>
      <h1>Hello Refine</h1>
      <hr />
      <Product />
      <hr />
      <ProductList />
      <hr />
    </Refine>
  );
}

export default App;
