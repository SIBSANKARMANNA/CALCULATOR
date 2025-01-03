import React, { useState } from 'react';
import '../styles/Calculator.css';
import Button from './Button';
import { evaluate } from 'mathjs'; // Import the evaluate function from math.js

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(evaluate(input).toString()); // Use math.js to safely evaluate the expression
      } catch (error) {
        setInput('Error');
      }
    }else if (value === '→') {
      // Remove the last character from the input
      setInput(input.slice(0, input.length - 1));
    }
     else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{input || '0'}</div>
      <div className="calculator-grid">
        {[...'789/456*123-0.C+=→'].map((btn, index) => (
          <Button key={index} label={btn} onClick={() => handleButtonClick(btn)} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;


