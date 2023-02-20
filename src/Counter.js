import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log('useEffect called');
  });

  return(
    <React.Fragment>
      {/* ternary operator: IF hidden is truthy, execute left side of colon, IF hidden is falsey, execute right side of colon */}
      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}
      <button onClick={() => {setCount(prevCount => prevCount + 1); setCount(prevCount => prevCount + 1)}}>Count!</button>
      <button onClick={() => setCount(counter + 1)}>Count Again!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;