import React from "react";
import { Responsive, Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { RouterNavBar } from "./router";

export const NavBar = () => {
  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Menu stackable compact widths={6} color="red" inverted>
        <Menu.Item name="home" exact={true} as={NavLink} to="/">
          Home
        </Menu.Item>

        <Menu.Item name="portfolio" as={NavLink} to="/portfolio">
          Portfolio
        </Menu.Item>

        <Menu.Item name="experience" as={NavLink} to="/experience">
          Experience
        </Menu.Item>

        <Menu.Item name="certificate" as={NavLink} to="/certificate">
          Certificate
        </Menu.Item>

        <Menu.Item name="about" as={NavLink} to="/about">
          About
        </Menu.Item>

        <Menu.Item name="contact" as={NavLink} to="/contact">
          Contact
        </Menu.Item>
      </Menu>
      <Segment>
        <RouterNavBar />
      </Segment>
    </Responsive>
  );
};

export default NavBar;
