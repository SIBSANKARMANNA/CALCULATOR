// src/components/Button.js
import React from 'react';
import '../styles/Button.css';

function Button({ label, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;