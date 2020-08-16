import React from "react";

const Bar = (props) => {
  const { value, color = "black" } = props;

  return (
    <div
      style={{
        width: value + "%",
        height: "20px",
        backgroundColor: color,
      }}
    />
  );
};

export default Bar;
