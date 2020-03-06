import React from "react";
import { Route } from "react-router-dom";

import Home from "../../pages/home";
import Portfolio from "../../pages/portfolio";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Experience from "../../pages/experience";
import Certificate from "../../pages/certificate";

export const RouterNavBar = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/experience" component={Experience} />
      <Route path="/certificate" component={Certificate} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};
