import React from "react";
import "./Home.css";
import About from "../About/About.js"
import BLogo from "../../Components/Images/BLogo.png";
import Background from "../../Components/Images/Background.jpg";
import Insta from "../../Components/Images/Insta.png";
import Facebook from "../../Components/Images/Facebook.png";

function Home() {
   return (
      <div>
         <div className="info">
            <h1 className="blackBark centerPage">Black Bark BBQ</h1>
            <span className="imgAndEst">
               <img src={BLogo} className="logo centerPage" />
               <h3 className="est centerPage">Est. AZ 2024</h3>
            </span>
            <h2 className="comingSoon centerPage">Coming soon!</h2>
            {/* <About /> */}
         </div>
         {/* <div className="footerInfo">
            <p className="check">Media</p>
            <div className="socialMedia">
               <img src={Insta} className="soc" id="socImage" />
               <img src={Facebook} className="soc" id="socImage" />
            </div>
         </div> */}
         <img className="background" src={Background} />
      </div>
   );
}

export default Home;
