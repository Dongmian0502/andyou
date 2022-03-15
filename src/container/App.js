import React from 'react';
import './App.css';
import Logo from './logo.PNG';
import styled from 'styled-components';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Merch from '../Merch/Merch';
import {HashRouter,Route } from 'react-router-dom';


function App() {
  const [searchStart,setSearchStart]=React.useState(false)
  const [pathname,setPathname]=React.useState('/')

  React.useEffect(()=>{
    const pn =window.location.pathname
    setPathname(pn)

  },[])
  return (
    <HashRouter>
      <StyleHeader>
        <StyleNav>
          <div>
           <a href='/'> <img src={Logo} style={{
              width:100,
            }}/></a>
          </div>
          <div className='nav-list'>
            <div className='search'>
              <input className={searchStart ? 'open':''} type='text'placeholder='告訴我你想喝點什麼?'/>
            <i onClick={()=>setSearchStart(!searchStart)} className="fa-solid fa-magnifying-glass" ></i>
              
            </div>
            <div className='nav'>
              <ul>
                <li>Menu</li>
                <li><a href='./about'>About</a></li>
                <li><a href='./merch'>Merch</a></li>
                <li>coming soon</li>
              </ul>
            </div>
            <div>
              <StyleSignInBtn>Sgin In</StyleSignInBtn>
            </div>
          </div>
        </StyleNav>
        <StyleHeaderContent>
          {pathname === '/' && 
          <React.Fragment>
            <div className='content-title'>Let,s Get Drink</div>
            <div className='content-text'>
              <div>Lorem 123 Jlfpsdlpfl lspdlfpdslfpds</div>
              <div>Lorem 123 Jlfpsdlpfl lspdlfpdslfpds</div>  
            </div>
            <StyleExBtn>example</StyleExBtn>
          </React.Fragment>
          }
          <Route path='/menu' component={Menu}/>
          {pathname === '/about' && <About />}
          {pathname === '/merch' && <Merch/>}

        </StyleHeaderContent>
      </StyleHeader>
      </HashRouter>
  );
}

export default App;
const StyleHeader=styled.header`
  padding:60px;
`
const StyleNav= styled.div`
  display:flex;
  justify-content:space-between;

  .nav-list{
  display:flex;
  justify-content:space-between;
  align-items:center;
  }
  .search{
    cursor: pointer;
  }
  .search i{
      margin-right: 10px;
  }
  .search input[type=text]{
      width: 0;
      border: none;
      outline: none;
      transition: width .3s;
  }
  .search input[type=text].open{
      padding: 4px 8px 4px 8px;
      width: 200px;
  }
  .nav ul{
      margin-left: 10px;
      margin-right: 10px;
      display:flex;
      list-style:none;
  }
  .nav ul li{
      padding: 10px 20px 10px 20px;
      cursor: pointer;
  }
  .nav ul li:hover{
      color: rgba(0, 0, 0, .8);
  }
` 
const StyleSignInBtn=styled.button`
  color:white;
  border:none;
  padding:10px 25px 10px 25px;
  background-color:#387724;
  border-radius:5px;
  cursor:pointer;
  outline:none;
}
&:hover{
  background-color:rgba(59, 120, 68,.3);
}

`
const StyleHeaderContent=styled.div`
  margin-top:110px;
  
  .content-title{
  font-size:48px;
  font-weight:600;
  }

  .content-text{
    font-size:16px;
    margin-top:65px;
    line-height:22px;
  }
`
const StyleExBtn=styled.button`
  margin-top:65px;
  padding:10px 25px 10px 25px;
  color:white;
  background-color:#387724;
  border:none;
  border-radius:5px;
  cursor:pointer;
`