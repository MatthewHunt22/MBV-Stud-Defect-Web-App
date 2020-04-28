import React from "react";

import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-images">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div>
        <img
          src={require("./daimler.png")}
          alt="Mercedes-Benz Star"
          className="toolbar-logo"
        />
      </div>
      <div className="spacer"></div>
      <div>
        <img
          src={require("./mbvstar.png")}
          alt="Mercedes-Benz Star"
          className="toolbar-logo"
        />
      </div>
    </nav>
  </header>
);

export default toolbar;
