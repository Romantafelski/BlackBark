import React from "react";
import "./Heading.css";

function Heading() {
  return (
    <div>
      <span className="heading">
        <button className="item" id="home">Home</button>
        <button className="item" id="menu">Menu</button>
        <button className="item" id="about">About</button>
      </span>
    </div>
  );
}

export default Heading;
