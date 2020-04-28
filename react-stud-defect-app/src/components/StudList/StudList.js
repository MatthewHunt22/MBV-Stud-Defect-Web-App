import React from "react";

import "./StudList.css";

export default class StudList extends React.Component {
  state = {
    loading: true,
    studs: []
  };

  async componentDidMount() {
    const url = "http://localhost:8080/studs";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ studs: data, loading: false });
  }

  render() {
    return (
      <div className="stud-list">
        {this.state.loading || !this.state.studs ? (
          <div> loading... </div>
        ) : (
          <div>
            <h2 style={{ marginBottom: "1rem" }}>All Studs</h2>
            <table
              className="table-styles"
              style={{ border: "2px solid #003366" }}
            >
              <tbody>
                <tr>
                  <th>Stud ID</th>
                  <th>Process</th>
                  <th>Assembly Name</th>
                </tr>
                {this.state.studs.map(stud => (
                  <tr key={stud.studID}>
                    <td>{stud.studID}</td>
                    <td>{stud.process}</td>
                    <td>{stud.assemblyName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
