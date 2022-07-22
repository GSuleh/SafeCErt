import styled from "styled-components";
type HomeWrapperType = {
  img: any;
};
const HomeWrapper = styled.div<HomeWrapperType>`
  
  padding-bottom:3vh;
  width: 100%;
  height: 768px;
  background-image: url(${({ img }) => img});
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top:10.4vh;
  @media(max-width:998px){
    padding-top: 30vh;
  }
`;
const HomeTitle = styled.div`

  color: #533BFF;
  border: 1px solid #533BFF;
  padding: 10vh 5vw 5ch 5vw;
  width: 40.3vw;
  height: 50vh;
  z-index: 1;
  @media (max-width: 400px) {
    font-size: 1.75rem;
  }
  @media (max-width: 998px) {
    width: 80vw;
    height: 40vw;
  }
`;

const HomeInput = styled.input`

  color: black;
  border: 0;
  border-bottom: 2px solid #533BFF;
  outline: 0;
  font-size: 1.3rem;
  margin-top: 20px;
  padding: 10px 0;
  background: transparent;
  transition: border-color 0.2s;
 
`;


const HomeLabel = styled.label`

  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1.2rem;
  color: Black;
}

`;


export { HomeWrapper, HomeTitle, HomeInput, HomeLabel };
