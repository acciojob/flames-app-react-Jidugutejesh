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

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    // remove common letters (case-sensitive)
    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1.splice(i, 1);
        arr2.splice(index, 1);
        i--;
      }
    }

    const total = arr1.length + arr2.length;
    const remainder = total % 6;

    const flamesMap = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };

    setResult(flamesMap[remainder]);
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
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculateFlames}
      >
        Calculate Relationship Future
      </button>

      <button data-testid="clear" name="clear" onClick={clearAll}>
        Clear
      </button>

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
