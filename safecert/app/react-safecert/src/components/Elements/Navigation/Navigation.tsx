import { ItemLink, List, NavigationWrapper } from "./Navigation.styles";

function handleClick (){
  
}

function Navigation ({ clicked }: { clicked: boolean;}) {
  return (
    <NavigationWrapper clicked={clicked}>
      <List>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            About
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Verify Certificate
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Get Started
          </ItemLink>
        </li> 
      </List>
    </NavigationWrapper>
  );
}

export default Navigation;
