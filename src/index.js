import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "yellow",
  fontSize: "30px",
  backgroundColor: "blue",
  border: "5px solid black",
  textAlign: "center"
};

customStyle.margin = "50px";

ReactDOM.render(
  <h1 style={customStyle}>hello world</h1>,
  document.getElementById("root")
);
