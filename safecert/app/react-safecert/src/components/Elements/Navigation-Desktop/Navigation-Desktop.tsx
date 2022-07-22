import { ItemLink, List, NavigationWrapper } from "./Navigation-Desktop.styles";
import { NavLink } from "react-router-dom";

function NavigationDesktop() {
  return (
    <NavigationWrapper>
      <List>
<<<<<<< HEAD
          <ItemLink > </ItemLink>
          <ItemLink > </ItemLink>
        <NavLink to="/">
          <ItemLink>Home</ItemLink>
        </NavLink>
        <NavLink to="/GetStarted">
          <ItemLink>Get Started</ItemLink>
        </NavLink>
=======
        <li className="line-on-hover">
        <NavLink to="/">
          <ItemLink>Home</ItemLink>
        </NavLink>
        </li>
        <li>
          <ItemLink >Verify Certificate</ItemLink>
        </li>
        <li>
        <NavLink to="/GetStarted">
          <ItemLink>Get Started</ItemLink>
        </NavLink>
        </li>
>>>>>>> c45fd14e20dc35bd9c85c9c7714e1a0e3248cea4
        
      </List>
    </NavigationWrapper>
  );
}

export default NavigationDesktop;
