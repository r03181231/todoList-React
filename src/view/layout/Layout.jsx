import React from "react";
import "./layout.css";

export const Layout = ({ children }) => {
  return <div className="wrap-layout">{children}</div>;
};

export default Layout;
