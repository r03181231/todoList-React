import React from "react";
import "./button.css";

function Button({ name }) {
  // e.preventDefault();
  return (
    <>
      <button>{name}</button>
    </>
  );
}

export default Button;
