import React from "react";
import "./Home.css";
import Main from "../../Components/Main/Main";
import Heading from "../../Components/Heading/Heading";
import BLogo from "../../Components/Images/BLogo.JPG";

function Home() {
   return (
      <div className="home">
         <Main />
         <div className="info">
            <img src={BLogo} className="logo" />
            <h2 className="soon">Coming soon to Gilbert, AZ</h2>
         </div>
         <Heading />
      </div>
  );
}

export default Home;
