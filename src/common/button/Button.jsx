import React from "react";

export const Button = ({ name, onClick, className, bgc }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: bgc,
      }}
    >
      {name}
    </button>
  );
};

export default Button;
