import React from "react";
import "./Home.css";
import Main from "../../Components/Main/Main";
import Heading from "../../Components/Heading/Heading";
import Logo from "./Logo.png";

function Home() {
   return (
      <div className="grid-container-home">
         <Heading />
         <Main />
         <div className="info">
            <h1 className="blackBark">Black Bark BBQ</h1>
            <img src={Logo} className="logo" />
            <h2 className="soon">Coming soon to Gilbert, AZ</h2>
         </div>
      </div>
   );
}

export default Home;
