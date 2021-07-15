import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "Rohit";
//const lname = "Samad";
//const n = 7;
const currentDate = new Date();
const year = currentDate.getFullYear();
const img = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontsize: "20",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    
    <h1 style={customStyle}>Hello</h1>
    
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
