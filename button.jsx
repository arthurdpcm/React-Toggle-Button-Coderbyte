import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle() {
  const [state, setState] = useState(true)
  function handleClick() {
    setState(!state)
  }
  
  return (
    <button onClick={handleClick}>{state ? 'ON' : 'OFF'}</button>
  );
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
