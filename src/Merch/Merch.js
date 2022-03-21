import React from "react";
import cafe1 from "../Image/product001.jpg";
import cafe2 from "../Image/product002.jpg";
import cafe3 from "../Image/product003.jpg";
import cafe4 from "../Image/product004.jpg";
import cafe5 from "../Image/product005.jpg";
import cafe6 from "../Image/product006.jpg";
import cafe7 from "../Image/product007.jpg";
import cafe8 from "../Image/product008.jpg";
import styled from "styled-components";
import Slider from "react-slick";
import "./Merch.css";

const settings = {
  dots: true,
  infinite: true,
  centerPadding: "60px",
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};
const Merch = () => {
  return (
    <div className="container-Merch">
      <div>
        <h1>123</h1>
        {""}
        <Slider {...settings}>
          <Col3 img={cafe1}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe2}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe3}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe4}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe5}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe6}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
        </Slider>{" "}
      </div>
      <div>
        <h1>234</h1>
        {""}
        <Slider {...settings}>
          <Col3 img={cafe1}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe2}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe3}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe4}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe5}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe6}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
        </Slider>{" "}
      </div>
    </div>
  );
};
export default Merch;

const Col3 = styled.div`
  background: pink;
  overflow: hidden;
  position: relative;
  border-radius: 20px;

  .img-cntr {
    width: 100%;
    &::before {
      content: "";
      display: block;
      padding-bottom: 75%;
    }
    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${(props) => props.img});
      background-position: center;
      background-size: cover;
    }
  }
`;
