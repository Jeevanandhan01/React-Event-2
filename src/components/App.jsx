import React, { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [one, step] = useState("");
  function ns(event) {
    setname(event.target.value);
  }
  function fin() {
    step(name);
  }

  return (
    <div className="container">
      <h1>Hello {one}!</h1>
      <input
        onChange={ns}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={fin}>Submit</button>
    </div>
  );
}

export default App;
