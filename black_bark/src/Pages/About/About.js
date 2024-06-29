import React from "react"
import Main from "../../Components/Main/Main"
import "./About.css"
import Heading from "../../Components/Heading/Heading"
import Rico from "./Rico.jpg" 
import Jon from "./Jon.jpg"

function About() {
  return (
     <div className="about-grid-container">
        <Main />
        <Heading />
        <div>
           <img className="rico" src={Rico} />
           <img className="jon" src={Jon} />
        </div>
     </div>
  );
}

export default About;
