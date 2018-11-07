import React from "react";

const Header = ({ children }) => (
   <div 
   style={{ color: "black", fontFamily: 'Nobile', fontSize: 200,
      height: 50, clear: "both", paddingBottom: 50, textAlign: "center" }}
    id="header">
       <h1>{children}</h1>
   </div>
)

export default Header;