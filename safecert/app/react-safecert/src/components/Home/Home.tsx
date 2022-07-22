import { HomeWrapper, HomeTitle, HomeInput, HomeLabel } from "./Home.styles";
<<<<<<< HEAD
import HomeImage from "../../images/desktop/image-home.png";
=======
import HomeImage from "../../images/desktop/image-home.jpg";
>>>>>>> c45fd14e20dc35bd9c85c9c7714e1a0e3248cea4
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
<<<<<<< HEAD
              <input style={{
                width: "200px",
                fontSize: "16px",
                padding: "15px",
                fontWeight: "bold",
                borderRadius: "5px",
                margin: "15px auto",
              }}
              type="submit" value="Verify" />
=======
              <input type="submit" value="Verify" />
>>>>>>> c45fd14e20dc35bd9c85c9c7714e1a0e3248cea4
          </div>
          </HomeTitle>
        </HomeWrapper>
      </MediaQuery>
    </>
  );
};
export default Home;
