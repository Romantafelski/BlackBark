import React from "react";
import "../Home/Home.css";
import Heading from "../Heading/Heading";

function Home() {
  return (
    <div>
      <div className="backTint"></div>
      <Heading className="heading" />
      <h1 className="blackBark">Black Bark BBQ</h1>
    </div>
  );
}

export default Home;
