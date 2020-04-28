import React from "react";
import moment from "moment";

import "./DefectList.css";

export default class DefectList extends React.Component {
  state = {
    loading: true,
    defects: []
  };

  async componentDidMount() {
    const url = "http://localhost:8080/defects";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      defects: data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
      loading: false
    });
    console.log(this.state.defects);
  }

  render() {
    return (
      <div className="defect-list">
        {this.state.loading || !this.state.defects ? (
          <div> loading... </div>
        ) : (
          <div>
            <h2 style={{ marginBottom: "1rem" }}>All Defects</h2>
            <table
              className="table-styles"
              style={{ border: "2px solid #003366" }}
            >
              <tbody>
                <tr>
                  <th>Stud ID</th>
                  <th>Units Affected</th>
                  <th>Defect Type</th>
                  <th>Date</th>
                </tr>
                {this.state.defects.map(defect => (
                  <tr key={defect.defectID}>
                    <td>{defect.studID}</td>
                    <td>{defect.unitsAffected}</td>
                    <td>{defect.defectType}</td>
                    <td>{moment(defect.date).format("MM/DD/YYYY")}</td>
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
