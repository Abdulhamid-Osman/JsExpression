import React from "react";
import ReactDom from "react-dom";
const fname = "Abdulhamid";
const lname = "Osman";
const year = new Date().getFullYear();

ReactDom.render(
  <div>
    <p>Created By {`${fname} ${lname}`}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
