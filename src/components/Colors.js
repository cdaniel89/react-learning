import React, { useState } from "react";
import Color from "./Color";
import colorsHexData from "./colorsHex";

function Colors(props) {
  const [active, setActive] = useState(null);
  const [hover, setHover] = useState(null);
  const handleText = (index) => {
    const newColors = [...colorsHexData];
    setActive(index);
    props.onClick(newColors[index].hex);
  };
  const toggleHover = (active, index) => {
    if (active) {
      setHover(index);
    } else {
      setHover(null);
    }
  };

  return (
    <React.Fragment>
      <div className="colors">
        {colorsHexData.map((color, index) => (
          <Color
            key={index}
            hex={color.hex}
            handleClick={handleText.bind(this)}
            index={index}
            active={active}
            handleHover={toggleHover}
            hover={hover}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
export default Colors;
