import React from "react";

import "./FindStud.css";
import FoundStud from "./FoundStud.js";

export default class FindStud extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: " ", submitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ submitted: false });
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    console.log(this.state.value);
  }

  render() {
    let foundStud;

    if (this.state.submitted) {
      foundStud = <FoundStud value={this.state.value} />;
    }

    return (
      <div className="find-stud">
        <h2 className="find-stud-title">Find Stud</h2>
        <form
          style={{ marginTop: "1rem", textAlign: "center" }}
          onSubmit={this.handleSubmit}
        >
          <p>Please enter the Stud ID you would like to view:</p>
          <label htmlFor="studID">Stud ID: </label>
          <input
            type="text"
            onChange={this.handleChange}
            id="studID"
            pattern="[0-9]{5}"
            required
            title="Must be a 5-digit number."
            style={{ marginRight: "10px", border: "1px solid black" }}
          />
          <input type="submit" value="Submit" className="stud-button" />
        </form>
        {foundStud}
      </div>
    );
  }
}
