import React from "react";

export default class EditStud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.stud.studID,
      process: "",
      assemblyName: "",
      addStudClicked: false,
      response: "",
      totalMissing: this.props.stud.totalMissing,
      totalBroken: this.props.stud.totalBroken,
      totalPosition: this.props.stud.totalPosition
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
      totalMissing: this.state.totalMissing,
      totalBroken: this.state.totalBroken,
      totalPosition: this.state.totalPosition
    };

    this.setState({ addStudClicked: true });

    const url = "http://localhost:8080/studs/" + this.state.value;
    fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(stud)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          response: "Stud " + data.studID + " was successfully edited."
        });
      })
      .catch(error => {
        this.setState({ response: "There was an error editing the stud." });
      });
  }

  render() {
    return !this.state.addStudClicked ? (
      <div>
        <h2>Edit Stud</h2>
        <div style={{ textAlign: "center" }}>
          <form className="add-stud" onSubmit={this.handleSubmit}>
            <p style={{ display: "inline-block", marginRight: ".5rem" }}>
              Stud ID:
            </p>
            <p style={{ display: "inline-block" }}>{this.state.value}</p>
            <br />
            Is this stud automatic or manual?
            <br />
            <div name="process" onChange={this.handleChange}>
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
            </div>
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
              value="Confirm Edit"
              className="stud-button"
              style={{ marginLeft: "6rem" }}
              required
            />
          </form>
        </div>
      </div>
    ) : (
      <div
        style={{ margin: "auto", textAlign: "center", paddingBottom: ".5rem" }}
      >
        {this.state.response}
      </div>
    );
  }
}
