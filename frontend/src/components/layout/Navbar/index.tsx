import React from "react";
import { NavItem } from "./navItem";

export const Navbar = () => (
  <nav>
    <ul>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </ul>
  </nav>
);

export default Navbar;
