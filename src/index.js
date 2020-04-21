import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import PlanetSearch from "./components/PlanetSearch";
import Logo from "./components/shared/Logo";
import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://yelp-hasura.herokuapp.com/v1/graphql",
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <Logo />
    <PlanetSearch />
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
