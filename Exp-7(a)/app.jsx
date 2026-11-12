
import React, { useState } from 'react';

function App() {

  const [message, setMessage] = useState('Hello');

  function handleClick() {
    setMessage('Button Clicked!');
  }

  return (
    <div>
      <h1>Event Handling Example</h1>

      <h2>{message}</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
