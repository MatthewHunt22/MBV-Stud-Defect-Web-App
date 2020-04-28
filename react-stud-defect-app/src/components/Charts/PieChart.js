import React from "react";
import { Pie } from "react-chartjs-2";

import "./PieChart.css";

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartRawData: [],
      chartLabels: [],
      chartValues: []
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8080/defects/week";
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ chartRawData: json });

    const obj = Object.fromEntries(this.state.chartRawData);
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    this.setState({ chartLabels: keys, chartValues: values });
  }

  render() {
    return <div></div>;
  }
}
