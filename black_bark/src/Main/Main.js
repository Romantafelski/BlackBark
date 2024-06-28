import React from "react";
import "./Main.css";
import Facebook from "../Images/Facebook.png";
import Insta from "../Images/Insta.png";
import Logo from "../Images/Logo.png";
import Background from "../Images/Background.jpg"
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <div className="nameSpan">
        <h1 className="blackBark">Black Bark BBQ</h1>
        <img className="logo" src={Logo} />
      </div>
      <span className="address">
        <p className="add">1234 Criss Crossing</p>
        <p className="add">Chandler, AZ</p>
        <p className="add">85118</p>
      </span>
      <span className="hours">
        <p className="day">Monday-Friday 11am-9pm</p>
        <p className="day">Saturday 11am-10pm</p>
        <p className="day">Sunday 11am-9pm</p>
      </span>
      <div className="socialImages">
        <h4 className="followUs">Follow Us</h4>
        <img className="fb" src={Facebook} />
        <img className="insta" src={Insta} />
      </div>
      <span className="heading">
        <Link to="/">
          <button className="item" id="home">
            Home
          </button>
        </Link>
        <Link to="/menu">
          <button className="item" id="menu">
            Menu
          </button>
        </Link>
        <Link to="/about">
          <button className="item" id="about">
            About
          </button>
        </Link>
      </span>
    </div>
  );
}

export default Main;
