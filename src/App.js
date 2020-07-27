import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import ReactRouterDom from "./Pages/ReactRouterDom";
import TailwindCss from "./Pages/TailwindCss";
import NoMatch from "./Pages/NoMatch";
import {} from "styled-components";
import './css/tailwind.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/react-router-dom" component={ReactRouterDom} />
        <Route path="/tailwind-css" component={TailwindCss} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
