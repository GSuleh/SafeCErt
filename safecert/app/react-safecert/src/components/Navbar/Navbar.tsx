import React from "react";
import MediaQuery from "react-responsive";
import {NavbarWrapper} from "./Navbar.styles"
import {  Logo, NavigationDesktop } from "../Elements/index";


export default function Navbar() {
  return (
    <NavbarWrapper> 
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
