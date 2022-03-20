import React from "react";
import cafe1 from "/src/Image/product001.jpg";
import cafe2 from "/src/Image/product002.jpg";
import cafe3 from "/src/Image/product003.jpg";
import cafe4 from "/src/Image/product004.jpg";
import cafe5 from "/src/Image/product005.jpg";
import cafe6 from "/src/Image/product006.jpg";
import cafe7 from "/src/Image/product007.jpg";
import cafe8 from "/src/Image/product008.jpg";
import styled from "styled-components";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Menu = () => {
  return (
    <div class="owl-carousel owl-theme">
      <div>
        <a href="#!">
          <div class="products">
            <div class="image-container">
              <img src={cafe1} />
            </div>
            <div class="priview">
              <h5 class="title">阿拉斯加咖啡</h5>
              <h6 class="subtitle">供應的條件</h6>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="#!">
          <div class="products">
            <div class="image-container">
              <img src={cafe2} />
            </div>
            <div class="priview">
              <h5 class="title">阿拉斯加咖啡</h5>
              <h6 class="subtitle">供應的條件</h6>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="#!">
          <div class="products">
            <div class="image-container">
              <img src={cafe3} />
            </div>
            <div class="priview">
              <h5 class="title">阿拉斯加咖啡</h5>
              <h6 class="subtitle">供應的條件</h6>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="#!">
          <div class="products">
            <div class="image-container">
              <img src={cafe4} />
            </div>
            <div class="priview">
              <h5 class="title">阿拉斯加咖啡</h5>
              <h6 class="subtitle">供應的條件</h6>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="#!">
          <div class="products">
            <div class="image-container">
              <img src={cafe5} />
            </div>
            <div class="priview">
              <h5 class="title">阿拉斯加咖啡</h5>
              <h6 class="subtitle">供應的條件</h6>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Menu;
