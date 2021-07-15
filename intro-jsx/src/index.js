import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import pi, {doublePi, triplePi} from './math';

//const name = "Rohit";
//const lname = "Samad";
//const n = 7;
//const currentDate = new Date();
//const year = currentDate.getFullYear();
//const img = "https://picsum.photos/200";
const date = new Date();
const currentTime = date.getHours();

const customStyle = {
  color: "red",
  fontsize: "20",
  border: "1px solid black"
};
let greeting;

if (currentTime < 12){
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currentTime <18){
  greeting = "Good Afternoon";
  customStyle.color = "red";
} else {
  greeting = "Good Night";
  customStyle.color = "red";
}



ReactDOM.render(
  <div>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>    
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
