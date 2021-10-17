import React from "react";
import '../../App.css';
import Nav from "../Nav";

export default function Layout({ children }) {
  return <div className="layout">
    <Nav />
    { children }
  </div>
}