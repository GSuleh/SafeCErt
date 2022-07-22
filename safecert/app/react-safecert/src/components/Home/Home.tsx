import { HomeWrapper, HomeTitle, HomeInput, HomeLabel } from "./Home.styles";
import HomeImage from "../../images/desktop/image-home.png";
import React from "react";
import MediaQuery from "react-responsive";

const Home = () => {
  return (
    <>
      <MediaQuery maxWidth={992}>
        <HomeWrapper img={HomeImage}>
          <HomeTitle className="wrapper">
          <h2>Verify Certificate</h2>
          <div>
            <HomeLabel>
              Certificate Hash:
              <HomeInput type="email" name="email" />
            </HomeLabel>
          </div>
          <div>
              <input type="submit" value="Verify" />
          </div>
          </HomeTitle>
        </HomeWrapper>
      </MediaQuery>

      <MediaQuery minWidth={992}>
        <HomeWrapper img={HomeImage}>
          <HomeTitle className="wrapper">
          <h2>Verify Certificate</h2>
          <div>
            <HomeLabel>
              Certificate Hash:
              <HomeInput type="email" name="email" />
            </HomeLabel>
          </div>
          <div>
              <input style={{
                width: "200px",
                fontSize: "16px",
                padding: "15px",
                fontWeight: "bold",
                borderRadius: "5px",
                margin: "15px auto",
              }}
              type="submit" value="Verify" />
          </div>
          </HomeTitle>
        </HomeWrapper>
      </MediaQuery>
    </>
  );
};
export default Home;
