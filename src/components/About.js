import React from "react";
import styled from "styled-components";
import myPic from "../images/myPic.jpg";

const AboutWrapper = styled.div`
  display: grid;
  grid-columns: 1fr 2fr;
`;

const Me = styled.img`
  display: inline;
  width: 250px;
`;

const Text = styled.p`
  display: inline-block;
`;

const About = () => (
  <AboutWrapper>
    <Me src={myPic} alt="Andrew T xyz" />
    <div>
      <Text>
        My name is Andrew, and I'm in love with the internet. I have been
        learning Web Development and Programming for two years now.
      </Text>
      <Text>
        {" "}
        I've also spent time learning about Linux, and the open-source world.
        It's pretty amazing what you'll learn once you begin looking into the
        massive amount of open-source code avaliable online.
      </Text>
    </div>
  </AboutWrapper>
);

export default About;
