import { Refine } from "@refinedev/core";

import "./App.css";
import { dataProvider } from "./providers/dataProvider";
import Product from "./Product";
import ProductList from "./ProductList";
import { liveProvider, Ably } from "@refinedev/ably";

const API_TOKEN = "syVQsA.ofJCQg:GvXwhLsJhjMo4onQ_zQKjvb9biBIXMiDd7qLo9ZVA38";
const client = new Ably.Realtime(API_TOKEN);
function App() {
  return (
    <Refine
      dataProvider={dataProvider}
      liveProvider={liveProvider(client)}
      options={{
        syncWithLocation: true,
        warnWhenUnsavedChanges: true,
        useNewQueryKeys: true,
        projectId: "SJfTms-PYL6TL-FC8Rws",
        liveMode: "auto",
      }}
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
