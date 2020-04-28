import React from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import "./SideDrawer.css";
import FindStud from "/Users/MatthewHunt/react-stud-defect-app/src/components/FindStud/FindStud.js";
import AddDefect from "/Users/MatthewHunt/react-stud-defect-app/src/components/Defects/AddDefect.js";
import StudList from "/Users/MatthewHunt/react-stud-defect-app/src/components/StudList/StudList.js";
import DefectList from "../Defects/DefectList.js";
import PieChart from "/Users/MatthewHunt/react-stud-defect-app/src/components/Charts/PieChart.js";

export default class SideDrawer extends React.Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <Router>
        <div>
          <nav className={drawerClasses}>
            <ul>
              <div>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/findstud">Find Stud</a>
                </li>
                <li>
                  <a href="/defectlist">Recent Defects</a>
                </li>
                <li>
                  <a href="/studlist">Stud List</a>
                </li>
                <li>
                  <a href="/">Stud Map</a>
                </li>
              </div>
              <div className="spacer"></div>
              <div>
                <li className="image2">
                  <img
                    src={require("./mbvtransparent.png")}
                    alt="Mercedes-Benz Vans Charleston Logo"
                    className="image"
                  />
                </li>
              </div>
            </ul>
          </nav>
          <div>
            <Route path="/home" component={PieChart} />
            <Route path="/findstud" component={FindStud} />
            <Route path="/adddefect" component={AddDefect} />
            <Route path="/defectlist" component={DefectList} />
            <Route path="/studlist" component={StudList} />
          </div>
        </div>
      </Router>
    );
  }
}
