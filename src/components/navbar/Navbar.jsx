import React from "react";
import { useState } from "react";
import "./navbar.css";
import {
  RiMenu3Line,
  RiCloseLine,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiMailLine,
} from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    {" "}
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#workshop">WorkSHop</a>
    </p>
    <p>
      <a href="#academic">Academic</a>
    </p>
    <p>
      <a href="#research">Research</a>
    </p>
    <p>
      <a href="#seminars">Seminars</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="gpt3_navbar-above">
        <div className="gpt3-navbar-email">
          <a href="">
            <RiMailLine />
          </a>
          <p>softwareengg@gmail.com</p>
        </div>
        <div className="gpt3-navbar-icons">
          <a href="">
            <RiFacebookCircleLine />
          </a>
          <a href="">
            <RiInstagramLine />
          </a>
          <a href="">
            <RiYoutubeLine />
          </a>
        </div>
      </div>
      <div className="gpt3_navbar">
        <div className="gpt3_navbar-links">
          <div className="gpt_navbar-links_logo">
            <a href="/home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="gpt3_navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="gpt3_navbar-sign ">
          <p>myIUB</p>
          <button type="button">Enroll Now</button>
        </div>
        <div className="gpt3_navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="white"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="white"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3_navbar-menu_container scale-up-center">
              <div className="gpt3_navbar-menu_container-links">
                <Menu />
                <div className="gpt3_navbar-menu_container-links-sign ">
                  <p>myIUB</p>
                  <button type="button">Enroll Now</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
