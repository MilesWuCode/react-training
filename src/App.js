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
import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/react-router-dom" component={ReactRouterDom} />
          <Route path="/tailwind-css" component={TailwindCss} />
          <Route path="/redux" component={Redux} />
          <Route path="/ajax" component={Ajax} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
