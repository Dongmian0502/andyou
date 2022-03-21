import React from "react";
import "./App.css";
import Logo from "/src/container/logo.PNG";
import indexBG from "/src/container/indexBG.PNG";
import snow3 from "/src/Image/snow/snow-3.png";
import li3 from "/src/Image/li/li-3.png";
import chian3 from "/src/Image/chian/chian-3.png";
import styled from "styled-components";
import About from "../About/About";
import Menu from "../Menu/Menu";
import Merch from "../Merch/Merch";
import { HashRouter, Link, Route } from "react-router-dom";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "50px",
  // centerMargin: "20px",
  slidesToShow: 2,
  speed: 500
};

function Index() {
  return (
    <React.Fragment>
      <div className="container-index">
        <div className="index">
          <div className="app-h1-fix col-6">
            <h1>
              隨著我們逐漸長大,被步調繁忙的城市所同化,是否也
              淡忘了當幻想過,自己能夠像是漫畫遊戲中的主人公一
              樣,來場甜滋滋的戀愛?生活繁忙的你,不如暫時停下
              腳步,進入貓頭鷹妖怪的世界裡,與他們一邊喝著可口
              的飲料、一邊來場放鬆身心的甜蜜約會吧!{" "}
            </h1>
          </div>
          <div className="content-title">Let,s Get Drink</div>
          <div className="content-text">
            <div>
              {" "}
              <h1>背景設定</h1>
              <p>
                作為棲息地被人類社會侵占的可憐鴞妖，為了求生存，三個同病相憐的鴞在人類社會中開了一間飲料店
              </p>
            </div>
            <br />
            <br />
            <div>
              <h1>設計概念</h1>
              <p>
                以貓頭鷹為主題，這是一場與三位融合日本ACG文化所創作之貓頭鷹化身的約會
              </p>
            </div>
          </div>
          {/* <StyleExBtn>example</StyleExBtn> */}
        </div>
      </div>
    </React.Fragment>
  );
}
function App() {
  const [searchStart, setSearchStart] = React.useState(false);
  const [pathname, setPathname] = React.useState("/");

  React.useEffect(() => {
    const pn = window.location.pathname;
    setPathname(pn);
  }, []);
  return (
    <Background>
      <div className="bg-snow" />
      <div className="bg-chian" />
      <div className="bg-li" />
      <HashRouter>
        <StyleHeader>
          <StyleNav>
            <div>
              <a href="/">
                <img src={Logo} className="headImg" />
              </a>
            </div>
            <div className="nav-list">
              <div className="search">
                <input
                  className={searchStart ? "open" : ""}
                  type="text"
                  placeholder="告訴我你想喝點什麼?"
                />

                <i
                  className="fa-solid fa-magnifying-glass"
                  onClick={() => setSearchStart(!searchStart)}
                ></i>
              </div>
              <div className="nav">
                <ul>
                  <li>
                    <Link to="./menu">Menu</Link>
                  </li>

                  <li>
                    <Link to="./about">About</Link>
                  </li>
                  <li>
                    <Link to="./merch">Merch</Link>
                  </li>
                  <li>coming soon</li>
                </ul>
              </div>
              <div>
                <StyleSignInBtn>Sign In</StyleSignInBtn>
              </div>
            </div>
          </StyleNav>
          <StyleHeaderContent>
            <Route exact path="/" component={Index} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/about" component={About} />
            <Route exact path="/merch" component={Merch} />
          </StyleHeaderContent>
        </StyleHeader>
      </HashRouter>
    </Background>
  );
}

export default App;
const Background = styled.div`
  background-image: url(${snow3});
  background-image: url(${chian3});
  /* background-size: contain; */
  background-repeat: no-repeat;
  position: absolute;
  background-size:contain; 
  width: 100%;
  height: 100%;
  /* .li{  
    background-image: url(${li3});
    object-position:right;
  } */
`;
const StyleHeader = styled.header`
  padding: 30px;
  /* background-color: #fffde5; */
  background-image: url("/src/container/indexBG");
`;
const StyleNav = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a:link {
    text-decoration: black;
  }
  a:visited {
    color: black;
  }
  .search {
    cursor: pointer;
  }
  .search i {
    margin-right: 10px;
  }
  .search input[type="text"] {
    width: 0;
    border: none;
    outline: none;
    transition: width 0.3s;
  }
  .search input[type="text"].open {
    padding: 4px 8px 4px 8px;
    width: 200px;
  }
  .nav ul {
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    list-style: none;
  }
  .nav ul li {
    padding: 10px 20px 10px 20px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .nav ul li:hover {
    background-color: #ffe4c4;
    a {
      color: #fffde5;
    }
  }
  .headImg {
    width: 150px;
    height: 100%;
  }
`;
const StyleSignInBtn = styled.button`
  color: white;
  border: none;
  padding: 10px 25px 10px 25px;
  background-color: #387724;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.5s;
  font-size: 15px;
  font-weight: 500;

  &:hover {
    background-color: rgba(59, 120, 68, 0.3);
  }
`;
const StyleHeaderContent = styled.div`
  margin-top: 110px;

  .content-title {
    font-size: 48px;
    font-weight: 600;
  }

  .content-text {
    font-size: 16px;
    margin-top: 65px;
    line-height: 22px;
  }
`;
const StyleExBtn = styled.button`
  margin-top: 65px;
  padding: 10px 25px 10px 25px;
  color: white;
  background-color: #387724;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
