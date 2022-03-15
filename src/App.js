import React from "react";
import "./App.css";
import Logo from "../src/container/logo.PNG";
import styled from "styled-components";
import About from "./About/About";
import Menu from "./Menu/Menu";
import Merch from "./Merch/Merch";
import { HashRouter, Link, Route } from "react-router-dom";

function Index() {
  return (
    <React.Fragment>
      <div className="content-title">Let,s Get Drink</div>
      <div className="content-text">
        <div>Lorem 123 Jlfpsdlpfl lspdlfpdslfpds</div>
        <div>Lorem 123 Jlfpsdlpfl lspdlfpdslfpds</div>
      </div>
      <StyleExBtn>example</StyleExBtn>
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
                <li>Menu</li>
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
              <StyleSignInBtn>Sgin In</StyleSignInBtn>
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
  );
}

export default App;

const StyleHeader = styled.header`
  padding: 60px;
  background-color: #fffde5;
`;
const StyleNav = styled.div`
  display: flex;
  justify-content: space-between;

  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
  .nav ul li:hover {
    color: rgba(0, 0, 0, 0.8);
  }
  .headImg {
    width: 100px;
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
