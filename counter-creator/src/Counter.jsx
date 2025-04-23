import {useState} from 'react';
import React from 'react';
function Counter() {
  // TODO: Implement useState hook here
  const [count, setCount] = useState (0);

  // TODO: Implement increment function
  const increment = () => {
   setCount(count + 1)
   // - Implement a max value that the counter cannot exceed.
   if(count >= 5) {
    setCount(count)
   }
  };

  // TODO: Implement decrement function
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
// - Add a reset button that sets the counter back to 0.
const reset = () => {
  setCount(0)
}
// - Skip certain numbers (skip 5s)
const skipNumbers = () => {
  {
    if(count % 5 === 4) {
      setCount(count + 2)
    }
    else (
    setCount(count + 1))
    
  }
}
  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={skipNumbers}>skip number</button>
    </div>
  );
}

export default Counter;
