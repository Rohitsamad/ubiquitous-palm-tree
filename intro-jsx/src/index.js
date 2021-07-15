import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "Rohit";
const lname = "Samad";
const n = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name+" "+lname}</h1>
    <p>My lucky number is {n}</p>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
