// src/App.js
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name1: "", name2: "", answer: "" };
  }

  normalize = (s) => s.replace(/\s+/g, "");

  removeCommons = (s1, s2) => {
    const a1 = s1.split("");
    const a2 = s2.split("");
    let i = 0;
    while (i < a1.length) {
      const ch = a1[i];
      const idx = a2.indexOf(ch);
      if (idx !== -1) {
        a1.splice(i, 1);
        a2.splice(idx, 1);
      } else {
        i++;
      }
    }
    return [a1.join(""), a2.join("")];
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
    if (!s1.length || !s2.length) {
      this.setState({ answer: "Please Enter valid input" });
      return;
    }
    const [r1, r2] = this.removeCommons(s1, s2);
    const mod = (r1.length + r2.length) % 6;
    const map = { 1: "Friends", 2: "Love", 3: "Affection", 4: "Marriage", 5: "Enemy", 0: "Siblings" };
    this.setState({ answer: map[mod] });
  };

  handleClear = () => this.setState({ name1: "", name2: "", answer: "" });

  render() {
    return (
      <div id="main">
        {/* Required inputs/buttons/h3 with exact attributes tests expect */}
        <input
          type="text"
          data-testid="input1"
          name="name1"
          value={this.state.name1}
          onChange={(e) => this.setState({ name1: e.target.value })}
          placeholder="First name"
        />

        <input
          type="text"
          data-testid="input2"
          name="name2"
          value={this.state.name2}
          onChange={(e) => this.setState({ name2: e.target.value })}
          placeholder="Second name"
        />

        <button
          type="button"
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={this.handleCalculate}
        >
          Calculate Relationship Future
        </button>

        <button
          type="button"
          data-testid="clear"
          name="clear"
          onClick={this.handleClear}
        >
          Clear
        </button>

        <h3 data-testid="answer">{this.state.answer}</h3>
      </div>
    );
  }
}

export default App;
