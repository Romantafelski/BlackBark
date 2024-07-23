import React from "react";
import "./Menu.css";
import Main from "../../Components/Main/Main";
import Heading from "../../Components/Heading/Heading";

function Menu() {
  return (
    <div>
      <Heading />
      <Main />
      <div className="menuPage">
        <h1 className="menuTitle">Menu</h1>
        <div className="menuItems">
          <div className="column1">
            <span className="fullItem">
              <h2 className="items" id="itemName">
                Pulled Pork
              </h2>
              <h6 className="items">
                Slowly smoked for 12 hours with your choice of BBQ sauce and a
                side
              </h6>
            </span>
            <span className="fullItem">
              <h2 className="items" id="itemName">
                Baby Back Ribs
              </h2>
              <h6 className="items">Seasoned ribs that fall off the bone</h6>
            </span>
            <span className="fullItem">
              <h2 className="items" id="itemName">
                Brisket
              </h2>
              <h6 className="items">
                Our brisket is smoked for 14 hours. Seasoned with Salt, pepper,
                and a little bit of our special blend
              </h6>
            </span>
          </div>
          <div className="column2">
            <span className="fullItem">
              <h2 className="items" id="itemName">
                Pulled Chicken
              </h2>
              <h6 className="items">
                Made nightly. This slow cooked perfection will leave your mouth
                in heaven
              </h6>
            </span>
            <span className="fullItem">
              <h2 className="items" id="itemName">
                Turkey breast
              </h2>
              <h6 className="items">
                Smoked mesquite turkey that promises not to disappoint
              </h6>
            </span>
            <span className="fullItem">
              <h2 className="items" id="itemName">
                Pick 2
              </h2>
              <h6 className="items">Pick your 2 delicious meats and a side</h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
