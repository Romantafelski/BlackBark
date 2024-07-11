import React from "react";
import "./Home.css";
import Main from "../../Components/Main/Main";
import Heading from "../../Components/Heading/Heading";
import Logo from "./Logo.png";
import Background from "../../Components/Images/Background.jpg";

function Home() {
   return (
      <div className="home">
         <div className="info">
            <h1 className="blackBark">Black Bark BBQ</h1>
            <img src={Logo} className="logo" />
            <h2 className="soon">Coming soon to Gilbert, AZ</h2>
         </div>
         <img className="background" src={Background} />
         <Main />
         <Heading />
      </div>
   );
}

export default Home;
