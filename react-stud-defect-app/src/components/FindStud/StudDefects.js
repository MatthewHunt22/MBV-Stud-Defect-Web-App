import React from "react";
import moment from "moment";

export default class StudDefect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studID: this.props.value,
      updateTable: this.props.newDefect,
      defects: []
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    const defecturl = "http://localhost:8080/defects/" + this.state.studID;
    fetch(defecturl)
      .then(res => res.json())
      .then(json =>
        this.setState({
          defects: json.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        })
      );
  }

  render() {
    if (this.state.updateTable) {
      this.fetchApi();
    }

    return (
      <div>
        <h2 style={{ marginTop: "2rem" }}>Recent Defects</h2>

        {this.state.defects.length > 0 ? (
          <table
            className="table-styles"
            style={{ marginTop: "1rem", border: "2px solid #003366" }}
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
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>There are no defects logged for this stud.</p>
          </div>
        )}
      </div>
    );
  }
}
