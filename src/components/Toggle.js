import React from "react";
import react, { useState } from "react";


function Toggle() {
  const [isOn, setisOn] = useState(false);
   function handleClick (){
    setisOn((isOn) => !isOn);
   }

  return <button onClick={handleClick}>{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;
