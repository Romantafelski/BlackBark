import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

function Heading() {
  return (
     <div>
         <nav className="links">
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
         </nav>
      </div>
   );
}

export default Heading;
