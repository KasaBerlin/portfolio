import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NavTop from "./NavTop";

const Router = () => {
  return (
    <HashRouter basename="/">
      <NavTop />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/aboutme" component={About} />
        <Route exact path="/work" component={Projects} />
        <Route excat path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
