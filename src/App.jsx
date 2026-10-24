
import { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  function handleAdd() {
    setResult(Number(a) + Number(b));
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>React CI/CD Midterm Assessment</h1>
      <h2>Calculator</h2>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="First number"
      />

      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Second number"
      />

      <button onClick={handleAdd}>Add</button>

      {result !== null && <h3>Result: {result}</h3>}

      <p>Version 1.0</p>
      <p>Created by: MA TESA NICOLE V NIETO </p>
    </div>
  );
}

export default App;
