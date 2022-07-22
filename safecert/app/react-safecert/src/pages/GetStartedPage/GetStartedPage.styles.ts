import styled from "styled-components";

const GetStartedHeader = styled.header`

  background-color: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

`;

type GetStartedWrapperType = {
  img: any;
};

const GetStartedWrapper = styled.div<GetStartedWrapperType>`
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
const GetStartedWrapperTitle = styled.div`

  color: white;
  border: 1px solid white;
  padding: 5vh 5vw 5ch 5vw;
  width: 45.3vw;
  height: 40vh;
  z-index: 1;
  @media (max-width: 400px) {
    font-size: 1.75rem;
  }
  @media (max-width: 998px) {
    width: 80vw;
    height: 40vw;
  }
`;

export { GetStartedHeader, GetStartedWrapper, GetStartedWrapperTitle };
