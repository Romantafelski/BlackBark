import React from "react";
import "./About.css";
import Jon from "../../Components/Images/Jon.jpg";
import Rico from "../../Components/Images/Rico.jpg";

function About() {
   return (
      <div>
         <div className="about">
            <div className="rico">
               <img className="ricoImage" src={Rico} />
               <p>
                  Born on April 26th, 1975 on the east side of Chicago. After
                  graduating from culinary school, I began working at Wolf
                  Gang Pucks in Chicago where I one time made duck for Oprah
                  Winfrey. I've lived in Michigan, Ohio, Colorado, and now
                  the great 48th state of Arizona. Here to smoke meat
                  everyday.
               </p>
            </div>
            <div className="jon">
               <img className="jonImage" src={Jon} />
               <p>
                  Born on April 26th, 1975 on the east side of Chicago. After
                  graduating from culinary school, I began working at Wolf
                  Gang Pucks in Chicago where I one time made duck for Oprah
                  Winfrey. I've lived in Michigan, Ohio, Colorado, and now
                  the great 48th state of Arizona. Here to smoke meat
                  everyday.
               </p>
            </div>
         </div>
      </div>
   );
}

export default About;
