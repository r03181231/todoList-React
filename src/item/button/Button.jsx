import React from "react";
import "./button.css";

export const Button = ({ name, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  );
};

export default Button;
