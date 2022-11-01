import React from "react";

const HighlightText = ({ text, color = "#0177ff" }) => {
  let borderColor = color + "44";
  let backgroundColor = color + "11";
  return (
    <span
      style={{
        color: color,
        borderBottom: `5px solid ${borderColor}`,
        backgroundColor: backgroundColor,
        padding: "0 0.2rem"
      }}
    >
      {text}
    </span>
  );
};

export default HighlightText;
