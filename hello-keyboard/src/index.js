import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisplayResult from './components/DisplayResult/DisplayResult';
import { upperButtons, midButtons, lowerButtons, spaceBtn } from './keyboardBtns';
import KeyboardBtn from './components/KeyboardBtn/KeyboardBtn';
import KeyBoardApp from './components/DisplayResult/DisplayResult';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      <div><KeyBoardApp letters={upperButtons} midLetters={midButtons} lowerLetters={lowerButtons} spaceBar={spaceBtn} />
      </div>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

