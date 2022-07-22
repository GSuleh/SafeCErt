import { ItemLink, List, NavigationWrapper } from "./Navigation-Desktop.styles";
import { NavLink } from "react-router-dom";

function NavigationDesktop() {
  return (
    <NavigationWrapper>
      <List>
          <ItemLink > </ItemLink>
          <ItemLink > </ItemLink>
        <NavLink to="/">
          <ItemLink>Home</ItemLink>
        </NavLink>
        <NavLink to="/GetStarted">
          <ItemLink>Get Started</ItemLink>
        </NavLink>
        
      </List>
    </NavigationWrapper>
  );
}

export default NavigationDesktop;
