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
         <h1 className="blackBark">Black Bark BBQ</h1>
            <img src={BLogo} className="logo" />
            <h3 className="est">Est. AZ 2024</h3>
            <h2 className="soon">Coming soon</h2>
         </div>
         <Heading />
      </div>
  );
}

export default Home;
