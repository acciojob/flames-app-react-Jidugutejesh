// src/App.jsx
import React, { useState } from "react";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateFlames = () => {
    if (name1.trim() === "" || name2.trim() === "") {
      setResult("Please Enter valid input");
      return;
    }

    // Use arrays to remove matched characters one-for-one (case sensitive)
    const arr1 = name1.split("");
    const arr2 = name2.split("");

    for (let i = 0; i < arr1.length; i++) {
      const idx = arr2.indexOf(arr1[i]);
      if (idx !== -1) {
        arr1.splice(i, 1);
        arr2.splice(idx, 1);
        i--; // step back to check the shifted element
      }
    }

    const total = arr1.length + arr2.length;
    const rem = total % 6;
    const map = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };

    setResult(map[rem]);
  };

  const clearAll = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    // Outer wrapper ensures page always has these elements
    <main style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1>FLAMES App</h1>

      {/* First input: has name="name1" and data-testid="input1" */}
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="name1">First Name</label>
        <input
          id="name1"
          type="text"
          data-testid="input1"
          name="name1"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          placeholder="First Name"
          style={{ display: "block", padding: 8, marginTop: 6 }}
        />
      </div>

      {/* Second input: has name="name2" and data-testid="input2" */}
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="name2">Second Name</label>
        <input
          id="name2"
          type="text"
          data-testid="input2"
          name="name2"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          placeholder="Second Name"
          style={{ display: "block", padding: 8, marginTop: 6 }}
        />
      </div>

      {/* Buttons: two buttons exist (Cypress checks for button existence) */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button
          type="button"
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={calculateFlames}
        >
          Calculate Relationship Future
        </button>

        <button
          type="button"
          data-testid="clear"
          name="clear"
          onClick={clearAll}
        >
          Clear
        </button>
      </div>

      {/* Result area: h3 with data-testid="answer" */}
      <div>
        <h3 data-testid="answer" aria-live="polite">
          {result}
        </h3>
      </div>
    </main>
  );
}

export default App;
