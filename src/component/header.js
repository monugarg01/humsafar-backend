import React from "react";
import "./header.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./about";
function Header() {
  return (
    <>
    <div>
      <div id="main-navbar" className="navbar">
        <div>
        <link rel="icon" href="%PUBLIC_URL%/icon.jpg" />
        <h2 className="logo"><Link to='/'>Humsafar Predictions</Link></h2>
        </div>
        <nav>
          <ul>
            <div className='telegramlink'>
              <figure>
                <a rel="noopener" target="_blank" className="telegram_hyperlink" href="https://t.me/+m0i4xltrEzQzZWI9">
                <img src = {telegram} className='image'/></a>
              </figure>
            </div>
            <li>
            <Link to="about">About</Link>
            </li>
            {/*<li>*/}
            {/*<Link to="/contactUs">Contact Us</Link>*/}
            {/*</li>*/}
            <li>
            <Link to="/Privacypolicy">Privacy policy</Link>
            </li>
          </ul>
        </nav>
        
      </div>
      
    </div>
     
     </>
  );
}
export default Header;