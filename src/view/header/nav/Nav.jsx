import React from "react";
import "./nav.css";
import CurrTime from "item/timer/CurrTime";

export const Nav = () => {
  return (
    <header>
      <h1 className="nav-list-text">Todo List -미루기 없이 오늘만 한다-</h1>
      <div className="title-nd-name">
        <CurrTime />
        <p>React</p>
      </div>
    </header>
  );
};

export default Nav;
