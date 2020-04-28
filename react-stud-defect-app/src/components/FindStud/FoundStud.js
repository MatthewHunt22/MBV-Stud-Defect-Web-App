import React from "react";
import moment from "moment";

import AddStud from "./AddStud.js";
import EditStud from "./EditStud.js";
import AddDefect from "/Users/MatthewHunt/react-stud-defect-app/src/components/Defects/AddDefect.js";
import StudDefect from "./StudDefects.js";

import "./FoundStud.css";

export default class FoundStud extends React.Component {
  // state = {
  //   stud: [],
  //   value: this.props.value,
  //   editStud: false
  // };

  constructor(props) {
    super(props);
    this.state = {
      stud: [],
      defects: [],
      value: this.props.value,
      editStud: false,
      addDefect: false,
    };

    this.handleDefectClick = this.handleDefectClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    const studurl = "http://localhost:8080/studs/" + this.state.value;
    fetch(studurl)
      .then((res) => res.json())
      .then((json) => this.setState({ stud: json }));
  }

  handleDefectClick() {
    this.setState((prevState) => ({
      addDefect: !prevState.addDefect,
    }));
    this.setState({ editStud: false });
  }

  handleEditClick() {
    this.setState((prevState) => ({ editStud: !prevState.editStud }));
    this.setState({ addDefect: false });
  }

  render() {
    let editStud;
    let addDefect;
    let studDefects;

    if (this.state.addDefect && !this.state.editStud) {
      addDefect = <AddDefect value={this.state.value} />;
    }

    if (this.state.editStud && !this.state.addDefect) {
      editStud = <EditStud stud={this.state.stud} />;
    }

    if (this.state.stud && !this.state.addDefect) {
      studDefects = (
        <StudDefect value={this.state.value} toggle={this.state.toggle} />
      );
    }

    return this.state.stud ? (
      <div style={{ margin: "1rem" }}>
        <table className="stud-found-table">
          <tbody>
            <tr>
              <td>Stud ID:</td>
              <td>Process:</td>
              <td>Assembly Name:</td>
              {/* <td>Total Missing:</td>
              <td>Total Broken:</td>
              <td>Total Off Position:</td> */}
            </tr>
            <tr>
              <td>{this.state.stud.studID}</td>
              <td>{this.state.stud.process}</td>
              <td>{this.state.stud.assemblyName}</td>
              {/* <td>{this.state.stud.totalBroken}</td>
              <td>{this.state.stud.totalMissing}</td>
              <td>{this.state.stud.totalPosition}</td> */}
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center", marginBottom: ".5rem" }}>
          <button
            className="stud-button"
            onClick={this.handleDefectClick}
            style={{ margin: "0 .5rem" }}
          >
            Add Defect
          </button>
          <button
            className="stud-button"
            onClick={this.handleEditClick}
            style={{ margin: "0 .5rem" }}
          >
            Edit Stud
          </button>
        </div>
        {editStud}
        {addDefect}
        {studDefects}
      </div>
    ) : (
      <div>
        <AddStud value={this.state.value} />
      </div>
    );
  }
}
