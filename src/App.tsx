import { Refine, useCreate } from "@refinedev/core";

import "./App.css";
import options from "./options";
import { dataProvider } from "./providers/dataProvider";
import Product from "./Product";
import ProductList from "./ProductList";

function App() {

  function addProduct() {
   
    console.log("gg");
  }

  return (
    <Refine dataProvider={dataProvider} options={options}>
      <h1>Hello Refine</h1>
      <hr />
      <Product />
      <hr />
      <ProductList />
      <hr />
      <button onClick={addProduct}>add</button>
    </Refine>
  );
}

export default App;
