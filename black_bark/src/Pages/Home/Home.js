import React from "react";
import "./Home.css";
import Main from "../../Components/Main/Main";
import Heading from "../../Components/Heading/Heading";
import Logo from "../../Components/Images/Logo.png";

function Home() {
<<<<<<< HEAD
  return (
    <div className="grid-container">
      <Heading />
      <Main />
      <div className="info">
        <h1 className="blackBark">Black Bark BBQ</h1>
        <div>
          <img src={Logo} className="logo" />
        </div>
        <h2 className="soon">Coming soon to Gilbert, AZ</h2>
=======
   return (
      <div className="home">
         <Main />
         <div className="info">
            <img src={Logo} className="logo" />
            <h2 className="soon">Coming soon to Gilbert, AZ</h2>
         </div>
         <Heading />
>>>>>>> 99b5d8410caa5689fb5dd4a991204e756492e763
      </div>
    </div>
  );
}

export default Home;
