import styled from "styled-components";
import { LineOnHover } from "../../../mixins";
//styles
const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;
<<<<<<< HEAD
const ItemLink = styled.li`
=======
const ItemLink = styled.a`
>>>>>>> c45fd14e20dc35bd9c85c9c7714e1a0e3248cea4
  color: white;
  position: relative;
  ${LineOnHover({
    height: "1px",
    color: "white",
    width: "100%",
    top: "24px",
    time: "0.5s"
  })}
`;
<<<<<<< HEAD

=======
>>>>>>> c45fd14e20dc35bd9c85c9c7714e1a0e3248cea4
const NavigationWrapper = styled.nav`
  width: 26.3vw;
  position: fixed;
  top: 0;
  right: 0;
  margin: 8.2vh 11.3vw;
  z-index: 1000;
`;
export { List, ItemLink, NavigationWrapper };
