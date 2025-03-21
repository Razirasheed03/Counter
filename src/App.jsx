import React, { useState } from 'react';
import './index.css';

const Sample = (props) => {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
    console.log('clicked', count);
  };
  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log('not valid');
    }
  };
  
  const reset = () => {
    setCount(0);
    console.log('reset to 0');
  };
  
  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">Interactive Counter</h1>
        
        <div className="counter-display">
          <div className="counter-circle">
            <span className="count-value">{count}</span>
          </div>
        </div>
        
        <div className="button-container">
          <button 
            onClick={decrement}
            className={`counter-button decrement-button ${count <= 0 ? 'disabled' : ''}`}
            disabled={count <= 0}
          >
            -
          </button>
          
          <button 
            onClick={increment}
            className="counter-button increment-button"
          >
            +
          </button>
        </div>
        
        <button 
          onClick={reset}
          className={`reset-button ${count === 0 ? 'disabled' : ''}`}
          disabled={count === 0}
        >
          Reset
        </button>
        
        <div className="credit-text">
          Created by razirasheed
        </div>
      </div>
    </div>
  );
};

export default Sample;