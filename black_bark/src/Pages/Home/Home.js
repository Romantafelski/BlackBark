import React from "react";
import "./Home.css";
import Heading from "../../Components/Heading/Heading";
import BLogo from "../../Components/Images/BLogo.png";
import Background from "../../Components/Images/Background.jpg";
import Insta from "../../Components/Images/Insta.png";
import Facebook from "../../Components/Images/Facebook.png";

function Home() {
   return (
      <div>
         <div className="home">
            <img className="background" src={Background} />
            <div className="info">
               <h1 className="blackBark centerPage">Black Bark BBQ</h1>
               <img src={BLogo} className="logo centerPage" />
               <h3 className="est centerPage">Est. AZ 2024</h3>
               <h2 className="soon centerPage">Coming soon!</h2>
            </div>
            <Heading />
            <footer className="footer">
               <div className="footerInfo">
                  <p className="follow soc">Follow us</p>
                  <span className="insta soc">
                     <p id="handle">
                        <img src={Insta} id="socImage" /> @blackbarkllc
                     </p>
                  </span>
                  <span className="facebook soc">
                     <p id="handle">
                        <img src={Facebook} id="socImage" /> @Kingsofque
                     </p>
                  </span>
               </div>
            </footer>
         </div>
      </div>
   );
}

export default Home;
