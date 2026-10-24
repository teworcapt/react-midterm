
import { useState } from "react";
import { add, subtract } from "./calculator";

function App() {
  const [first, setFirst] = useState("0");
  const [second, setSecond] = useState("0");
  const [result, setResult] = useState(null);

  function calculate(operation) {
    const a = Number(first);
    const b = Number(second);

    if (first.trim() === "" || second.trim() === "" ||
        !Number.isFinite(a) || !Number.isFinite(b)) {
      setResult("Please enter valid numbers.");
      return;
    }

    setResult(
      operation === "add" ? add(a, b) : subtract(a, b)
    );
  }

  return (
    <main style={{
      maxWidth: "420px",
      margin: "60px auto",
      padding: "24px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1>React Calculator</h1>
      <p>Version 2.0</p>

      <label htmlFor="first">First number</label>
      <input
        id="first"
        type="number"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        style={{ display: "block", width: "100%", padding: "10px", margin: "8px 0 16px" }}
      />

      <label htmlFor="second">Second number</label>
      <input
        id="second"
        type="number"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
        style={{ display: "block", width: "100%", padding: "10px", margin: "8px 0 16px" }}
      />

      <button onClick={() => calculate("add")}>Add (+)</button>
      {" "}
      <button onClick={() => calculate("subtract")}>Subtract (−)</button>

      <h2>Result: {result === null ? "—" : result}</h2>
    </main>
  );
}

export default App;
