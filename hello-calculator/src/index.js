import React from 'react';
import ReactDOM from 'react-dom/client';
import CalculatorApp from './components/CalculatorApp/CalculatorApp';
import './index.css';
let calBtn = ["()", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", "."]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculatorApp btns={calBtn} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

