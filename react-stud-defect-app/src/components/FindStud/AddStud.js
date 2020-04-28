import React from "react";

import "./AddStud.css";
export default class AddStud extends React.Component {
  // state = {
  //   value: this.props.value
  // };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      process: "",
      assemblyName: "",
      addStudClicked: false,
      response: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const stud = {
      studID: this.state.value,
      process: this.state.process,
      assemblyName: this.state.assemblyName,
      totalBroken: 0,
      totalMissing: 0,
      totalPosition: 0
    };

    this.setState({ addStudClicked: true });

    const url = "http://localhost:8080/addstud";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(stud)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          response: "Stud " + data.studID + " was successfully added."
        });
      })
      .catch(error => {
        this.setState({ response: "There was an error adding the stud." });
      });

    console.log("hi");
  }

  render() {
    return !this.state.addStudClicked ? (
      <div>
        <p className="not-found">
          The stud that you searched for does not exist
        </p>
        <h2>Add Stud</h2>
        <div style={{ textAlign: "center" }}>
          <form className="add-stud" onSubmit={this.handleSubmit}>
            <p style={{ display: "inline-block", marginRight: ".5rem" }}>
              Stud ID:
            </p>
            <p style={{ display: "inline-block" }}>{this.state.value}</p>
            <br />
            <label htmlFor="process" style={{ marginRight: "1.8rem" }}>
              Stud Process:
            </label>
            <select
              id="process"
              name="process"
              required
              onChange={this.handleChange}
              style={{ border: "1px solid black" }}
            >
              <option disabled selected value="">
                Select Stud Process
              </option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="N/A">N/A</option>
            </select>
            {/* <div name="process" onChange={this.handleChange}>
              <input
                type="radio"
                id="auto"
                name="process"
                value="Automatic"
                required
              />
              <label htmlFor="auto">Automatic</label>
              <br />
              <input type="radio" id="manual" name="process" value="Manual" />
              <label htmlFor="manual">Manual</label>
              <br />
              <input type="radio" id="na" name="process" value="N/A" />
              <label htmlFor="na">N/A</label>
            </div> */}
            <br />
            <label htmlFor="assemblyName">Assembly Name:</label>
            <input
              type="text"
              name="assemblyName"
              onChange={this.handleChange}
              style={{ border: "1px solid black" }}
            />
            <br />
            <input
              type="submit"
              value="Add Stud"
              className="stud-button"
              style={{ marginLeft: "6rem" }}
              required
            />
          </form>
        </div>
      </div>
    ) : (
      <div style={{ margin: "auto", textAlign: "center", paddingTop: "1rem" }}>
        {this.state.response}
      </div>
    );
  }
}
