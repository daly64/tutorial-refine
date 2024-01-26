import { Refine } from "@refinedev/core";

import "./App.css";
import options from "./options";
import { dataProvider } from "./providers/dataProvider";
import Product from "./Product";
import ProductList from "./ProductList";
import { liveProvider } from "./providers/liveProvider";

function App() {
  return (
    <Refine
      dataProvider={dataProvider}
      liveProvider={liveProvider}
      options={{ liveMode: "auto" }}
      // options={options}
    >
      <h1>Hello Refine</h1>
      <hr />
      <Product />
      <hr />
      <ProductList />
    </Refine>
  );
}

export default App;
