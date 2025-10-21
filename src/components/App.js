import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      answer: "",
    };
  }

  normalize = (str) => str.replace(/\s+/g, "");

  removeCommons = (s1, s2) => {
    const arr1 = s1.split("");
    const arr2 = s2.split("");

    let i = 0;
    while (i < arr1.length) {
      const ch = arr1[i];
      const idx = arr2.indexOf(ch);
      if (idx !== -1) {
        arr1.splice(i, 1);
        arr2.splice(idx, 1);
      } else {
        i++;
      }
    }
    return [arr1.join(""), arr2.join("")];
  };

  handleCalculate = (e) => {
    e.preventDefault();
    const { name1, name2 } = this.state;

    if (!name1.trim() || !name2.trim()) {
      this.setState({ answer: "Please Enter valid input" });
      return;
    }

    const s1 = this.normalize(name1);
    const s2 = this.normalize(name2);

    if (s1.length === 0 || s2.length === 0) {
      this.setState({ answer: "Please Enter valid input" });
      return;
    }

    const [rem1, rem2] = this.removeCommons(s1, s2);
    const remainingCount = rem1.length + rem2.length;
    const mod = remainingCount % 6;

    const relationMap = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };

    const relation = relationMap[mod];
    this.setState({ answer: relation });
  };

  handleClear = () => {
    this.setState({
      name1: "",
      name2: "",
      answer: "",
    });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <div style={{ marginBottom: "10px" }}>
          <input
            data-testid="input1"
            name="name1"
            placeholder="Enter first name"
            value={this.state.name1}
            onChange={(e) => this.setState({ name1: e.target.value })}
          />
          <input
            data-testid="input2"
            name="name2"
            placeholder="Enter second name"
            style={{ marginLeft: "8px" }}
            value={this.state.name2}
            onChange={(e) => this.setState({ name2: e.target.value })}
          />
          <button
            data-testid="calculate_relationship"
            name="calculate_relationship"
            style={{ marginLeft: "8px" }}
            onClick={this.handleCalculate}
          >
            Calculate Relationship Future
          </button>
          <button
            data-testid="clear"
            name="clear"
            style={{ marginLeft: "8px" }}
            onClick={this.handleClear}
          >
            Clear
          </button>
        </div>

        <h3 data-testid="answer">{this.state.answer}</h3>
      </div>
    );
  }
}

export default App;
