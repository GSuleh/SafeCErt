import React from "react";
import MediaQuery from "react-responsive";
import {NavbarWrapper} from "./Navbar.styles"
import {  Logo, NavigationDesktop } from "../Elements/index";


export default function Navbar() {
  return (
<<<<<<< HEAD
    <NavbarWrapper> 
=======
    <NavbarWrapper>
>>>>>>> c45fd14e20dc35bd9c85c9c7714e1a0e3248cea4
      <Logo />
      <MediaQuery maxWidth={992}>
      <NavigationDesktop />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <NavigationDesktop />
      </MediaQuery>
    </NavbarWrapper>
  );
}
