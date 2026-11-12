import React, { useState } from 'react';
function Student(props) {
  return <h2>Student Name: {props.name}</h2>;
}

function App() {

  // State
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Props and State Example</h1>

      <Student name="Ravi" />

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
