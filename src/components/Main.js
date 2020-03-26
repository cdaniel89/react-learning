import React from "react";
import Title from "./Title";
import Subtitle from "./SubTitile";

const Main = ({ backStyle, textStyle }) => {
  return (
    <div className="body" style={backStyle}>
      <Title textStyle={textStyle} />
      <Subtitle textStyle={textStyle} />
    </div>
  );
};

export default Main;
