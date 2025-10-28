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

    const arr1 = name1.split("");
    const arr2 = name2.split("");

    for (let i = 0; i < arr1.length; i++) {
      const idx = arr2.indexOf(arr1[i]);
      if (idx !== -1) {
        arr1.splice(i, 1);
        arr2.splice(idx, 1);
        i--;
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
    <div>
      <h1>FLAMES App</h1>

      <input
        type="text"
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="First Name"
      />

      <input
        type="text"
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Second Name"
      />

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

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
