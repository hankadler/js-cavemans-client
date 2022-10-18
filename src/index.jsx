import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RecoilRoot } from "recoil";
import "animate.css";
import "./index.css";
import App from "./App";

const client = new ApolloClient({
  // uri: "http://localhost:3000/graphql", // dev
  uri: "https://44.194.167.239/graphql", // prod
  cache: new InMemoryCache()
});

const root = createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ApolloProvider>
);
