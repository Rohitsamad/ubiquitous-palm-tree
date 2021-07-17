import React, { useState} from "react";

function App() {

  const [headingText, setheadingText] = useState("hello");
  const [isMouseOver, setisMouseOver] = useState(false);

  function handleClick() {
    setheadingText("submitted");
  }

  function handelMouseOver() {
    setisMouseOver(true);
  }

  function handleMouseOut() {
    setisMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor : isMouseOver ? "black" : "white" }} onMouseOut={handleMouseOut} onMouseOver={handelMouseOver} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
