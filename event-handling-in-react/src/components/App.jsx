import React, { useState } from 'react';

function App() {

  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target

    setfullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    })

  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form action="">
      <input type="text" onChange={handleChange} name="fName" placeholder="First name"/>
      <input type="text" onChange={handleChange} name="lName" placeholder="Last name" />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;


























/*import React, { useState} from "react";

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

  const [name, setName] = useState("");

  function handleChange() {
    setName(event.target.value);
  }

  return (
    <div className="container">
      {<h1>Hello {name}</h1>}
      <input value={name} onChange={handleChange} type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor : isMouseOver ? "black" : "white" }} onMouseOut={handleMouseOut} onMouseOver={handelMouseOver} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
*/

