import React from "react";
import "./Main.css";
import Insta from "../Images/Insta.png";
import Facebook from "../Images/Facebook.png";

function Main() {
  return (
    <div className="grid-container">
      <div className="hours">
        <h2 className="label">Hours</h2>
        <p className="add">Monday-Friday 11am-9pm</p>
        <p className="add">Saturday 11am-10pm</p>
        <p className="add">Sunday 11am-9pm</p>
      </div>
      <div className="address">
        <h2 className="label">Address</h2>
        <p className="add" id="addLink">
         <a id="addLink" href="https://www.google.com/maps/place/Greenfield+Lakes+Golf+Course/@33.3369004,-111.7389275,17z/data=!3m1!4b1!4m6!3m5!1s0x872bae9f7207c147:0x58dc9f0979d19e4!8m2!3d33.3369004!4d-111.7363526!16s%2Fg%2F1vfn73jk?entry=ttu">
          1234 Criss Crossing
          <br />
          Chandler, AZ
          <br />
          85118
        </a>
        </p>
      </div>
      <div className="socials">
        <h2 className="label">Socials</h2>
        <p className="add" id="handle">
          <img src={Insta} id="socImage" /> @blackbarkllc
        </p>
        <p className="add" id="handle">
          <img src={Facebook} id="socImage" /> @Kingsofque
        </p>
      </div>
    </div>
  );
}

export default Main;
