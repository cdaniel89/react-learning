import React, { useState } from "react";

import Colors from "./components/Colors";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [titleColor, setTitleColor] = useState("");
  // const handleText = colorHex => {
  //   setTitleColor(colorHex);
  // };
  const textStyle = {
    color: "#" + titleColor
  };

  const [backColor, setBackColor] = useState("");
  // const handleBackColor = colorHex => {
  //   setBackColor(colorHex);
  // };
  const backStyle = {
    backgroundColor: "#" + backColor
  };

  return (
    <div className="App">
      <h3 className="app-title">My Color Picker</h3>

      <div className="main">
        <div className="colors-wrapper">
          <Colors onClick={setTitleColor} />
          <Colors onClick={setBackColor} />
        </div>
        <Main textStyle={textStyle} backStyle={backStyle} />
      </div>
    </div>
  );
}

export default App;
