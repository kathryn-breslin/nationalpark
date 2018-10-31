import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
    <div
      style={{ color: "white", fontFamily: 'Assistant', fontSize: 300,
      height: 500, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
      id="homeJumbo"
    >
      {children}
    </div>
  );

export default Jumbotron;