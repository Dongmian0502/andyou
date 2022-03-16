import React from "react";
import styled from "styled-components";
import Img from "/src/Image/coffee.jpg";

const About = () => {
  return (
    <div>
      <h1>三位企業寶寶的介紹</h1>
      <div></div>
      <div>
        <div className="col-lg-4">
          <img src={Img} alt=""></img>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4"></div>
      </div>
      <h2>設計概念</h2>
      以貓頭鷹為主題，這是一場與三位融合日本ACG文化所創作之貓頭鷹化身的約會
    </div>
  );
};
export default About;
// const Img = styled.img`
//   .col-lg-4 {
//     width: 33.333333%;
//   }
// `;
