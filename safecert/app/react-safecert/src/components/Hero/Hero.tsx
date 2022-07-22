import { HeroWrapper, HeroTitle } from "./Hero.styles";
import heroMobileImage from "../../images/mobile/image-hero.jpg";
import heroDesktopImage from "../../images/desktop/image-hero.png";
import React from "react";
import MediaQuery from "react-responsive";
const Hero = () => {
  return (
    <>
      <MediaQuery maxWidth={992}>
        <HeroWrapper img={heroMobileImage}>
          <HeroTitle className="wrapper">
          <h2>Need Digital Credentials?</h2>
          <p>SafeCert has you covered! Get all your certificates and diplomas secured on blockchain, all in one place.</p>
          </HeroTitle>
        </HeroWrapper>
      </MediaQuery>

      <MediaQuery minWidth={992}>
        <HeroWrapper img={heroDesktopImage}>
          <HeroTitle className="wrapper">
          <h2>Need Digital Credentials?</h2>
          <p>SafeCert has you covered! Get all your certificates and diplomas secured on blockchain, all in one place.</p>
          </HeroTitle>
        </HeroWrapper>
      </MediaQuery>
    </>
  );
};
export default Hero;
