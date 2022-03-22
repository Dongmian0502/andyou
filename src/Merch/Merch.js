import React from "react";
import badge_chian from "../Image/merch-img/IMG_1861.PNG";
import badge_li from "../Image/merch-img/IMG_1860.PNG";
import badge_snow from "../Image/merch-img/IMG_1859.PNG";
import stand_chian from "../Image/merch-img/chian-stand.png";
import stand_li from "../Image/merch-img/li-stand.png";
import stand_snow from "../Image/merch-img/snow-stand.png";
import badge2_chian from "../Image/merch-img/IMG_2005.JPG";
import badge2_li from "../Image/merch-img/IMG_2004.JPG";
import badge2_snow from "../Image/merch-img/IMG_2003.JPG";
import head_chian from "../Image/merch-img/chian-head.PNG";
import head_li from "../Image/merch-img/li-head.PNG";
import head_snow from "../Image/merch-img/snow-head.PNG";
import charm_chian from "../Image/merch-img/chian-charm.png";
import charm_li from "../Image/merch-img/li-charm.png";
import charm_snow from "../Image/merch-img/snow-charm.png";
import charm2_chian from "../Image/merch-img/chian-Qcharm.png";
import charm2_li from "../Image/merch-img/li-Qcharm.png";
import charm2_snow from "../Image/merch-img/snow-Qcharm.png";
import Q3 from "../Image/merch-img/3Q.png";
import merch_bg from "../Image/merch-img/merch-bg.png";
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
  autoplaySpeed: 2500,
};
const Merch = () => {
  return (
    <div className="container-merch">
          <img className='merch-bg' src={merch_bg}></img>
      <div>
        <h1>徽章區</h1>
        {""}
        <Slider {...settings}>
          <Col3 img={badge_li}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={head_li}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={badge_chian}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={head_chian}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={badge_snow}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={head_snow}>
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
          {/* <Col3 img={}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3>
          <Col3 img={cafe6}>
            <div className="img-cntr">
              <div className="image" />
            </div>
          </Col3> */}
        </Slider>{" "}
      </div>
    </div>
  );
};
export default Merch;

const Col3 = styled.div`
  background: #E4E5E6;
  overflow: hidden;
  position: relative;
  border-radius: 20px;

  .img-cntr {
    width: 60%;
    &::before {
      content: "";
      display: block;
      padding-bottom: 90%;
    }
    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${(props) => props.img});
      background-position: center;
      background-size: contain;
      background-repeat:No-repeat;
    }
  }
`;
