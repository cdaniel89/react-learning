import React from "react";

function Color({ hex, index, handleClick, active, handleHover, hover }) {
  const style = {
    backgroundColor: "#" + hex
  };

  return (
    <span>
      <div
        value={hex}
        className={`color-item ${index === active ? "active" : ""} ${
          index === hover ? "hover" : ""
        } `}
        onClick={() => handleClick(index)}
        style={style}
        onMouseEnter={() => handleHover(true, index)}
        onMouseLeave={() => handleHover(false, index)}
      ></div>
    </span>
  );
}

export default Color;
