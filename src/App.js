import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ReactRouterDom from "./pages/ReactRouterDom";
import TailwindCss from "./pages/TailwindCss";
import Redux from "./pages/Redux";
import Ajax from "./pages/Ajax";
import Form from "./pages/Form";
import ThirdPartyLogin from "./pages/ThirdPartyLogin";
import Graphql from "./pages/Graphql";
import NoMatch from "./pages/NoMatch";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/react-router-dom" component={ReactRouterDom} />
            <Route path="/tailwind-css" component={TailwindCss} />
            <Route path="/redux" component={Redux} />
            <Route path="/ajax" component={Ajax} />
            <Route path="/form" component={Form} />
            <Route path="/third-party-login" component={ThirdPartyLogin} />
            <Route path="/graphql" component={Graphql} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
