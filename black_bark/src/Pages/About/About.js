import React from "react"
import Main from "../../Components/Main/Main"
import "./About.css"
import Rico from "./Rico.jpg" 
import Jon from "./Jon.jpg"

function About() {
  return (
     <div>
        <Main />
        <div className="about">
           <img className="rico" src={Rico} />
           <img className="jon" src={Jon} />
        </div>
     </div>
  );
}

export default About;
