import React, { useState } from 'react'

function App() {

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    
    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email          
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form action="">
      <input onChange={handleChange} value={contact.fName} type="text" name="fName" placeholder="First name"/>
      <input onChange={handleChange} value={contact.lName} type="text" name="lName" placeholder="Last name" />
      <input onChange={handleChange} value={contact.email} type="text" name="email" placeholder="email" />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;














/*import React, { useState } from 'react';

function App() {

  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
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


*/























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

