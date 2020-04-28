import React from "react";
import StudDefect from "/Users/MatthewHunt/react-stud-defect-app/src/components/FindStud/StudDefects.js";

import "./AddDefect.css";
export default class AddDefect extends React.Component {
  // state = {
  //   value: this.props.value
  // };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      unitsAffected: "",
      defectType: "",
      defectDate: "",
      addDefectClicked: false,
      response: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name + " " + event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    const defect = {
      studID: this.state.value,
      unitsAffected: this.state.unitsAffected,
      defectType: this.state.defectType,
      date: this.state.defectDate,
    };

    console.log(this.state.defectDate);

    const url = "http://localhost:8080/adddefect";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(defect),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          response:
            "Defect finding(s) of stud " +
            defect.studID +
            " was successfully added.",
        });
      })
      .catch((error) => {
        this.setState({
          response: "There was an error adding the defect finding.",
        });
      });

    this.setState({ addDefectClicked: true });
  }

  render() {
    return !this.state.addDefectClicked ? (
      <div>
        <h2>Add Defect</h2>
        <div style={{ textAlign: "center" }}>
          <form className="add-stud" onSubmit={this.handleSubmit}>
            <div style={{ marginBottom: "-2rem" }}>
              <p style={{ display: "inline-block", marginRight: ".5rem" }}>
                Stud ID:
              </p>
              <p style={{ display: "inline-block" }}>{this.state.value}</p>
            </div>
            <br />
            <label htmlFor="unitsAffected">Units Affected:</label>
            <input
              type="number"
              name="unitsAffected"
              onChange={this.handleChange}
              style={{ border: "1px solid black" }}
            />
            <br />
            <label htmlFor="defectType" style={{ marginRight: ".4rem" }}>
              Type of Defect:
            </label>
            <select
              id="defectType"
              name="defectType"
              required
              onChange={this.handleChange}
              style={{ border: "1px solid black" }}
            >
              <option disabled selected value="">
                Select Defect Type
              </option>
              <option value="Missing">Missing</option>
              <option value="Broken">Broken</option>
              <option value="Off Position">Off Position</option>
            </select>
            <br />
            <label htmlFor="defectDate">Date of Defect:</label>
            <input
              type="date"
              id="defectDate"
              name="defectDate"
              style={{ border: "1px solid black" }}
              onChange={this.handleChange}
            />
            <br />
            <div style={{ textAlign: "center" }}>
              <input
                type="submit"
                value="Confirm Defect"
                className="stud-button"
                required
              />
            </div>
          </form>
        </div>
        <StudDefect
          value={this.state.value}
          newDefect={this.state.addDefectClicked}
        />
      </div>
    ) : (
      <div style={{ margin: "auto", textAlign: "center", paddingTop: "1rem" }}>
        {this.state.response}
        <StudDefect
          value={this.state.value}
          newDefect={this.state.addDefectClicked}
        />
      </div>
    );
  }
}
