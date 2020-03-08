import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "../../pages/home";
import Portfolio from "../../pages/portfolio";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Experience from "../../pages/experience";
import Certificate from "../../pages/certificate";
import NotFound from "../../pages/NotFound";

export const RouterNavBar = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/experience" component={Experience} />
        <Route path="/certificate" component={Certificate} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};
