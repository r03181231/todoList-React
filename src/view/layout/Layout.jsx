import React from "react";
import "./layout.css";

export const Layout = (props) => {
  return <div className="wrap-layout">{props.children}</div>;
};

export default Layout;
