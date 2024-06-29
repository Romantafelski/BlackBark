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
            <p className="add">1234 Criss Crossing</p>
            <p className="add">Chandler, AZ</p>
            <p className="add">85118</p>
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
