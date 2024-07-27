import React from "react";
import "./Home.css";
import Main from "../../Components/Main/Main";
import Heading from "../../Components/Heading/Heading";
import BLogo from "../../Components/Images/BLogo.png";




function Home() {
   return (
      <div className="home">
         <Main />
         <div className="info">
         <h1>Black Bark BBQ</h1>
            <img src={BLogo} className="logo" />
            <h3>Est. AZ 2024</h3>
            <h2 className="soon">Coming soon to Gilbert, AZ</h2>
         </div>
         <Heading />
      </div>
  );
}

export default Home;
