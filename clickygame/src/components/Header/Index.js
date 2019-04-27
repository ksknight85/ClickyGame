import React from 'react';
import "./style.css";

function Header(props) {
  return (
    <header className="title">  
      <h1>Clicky Game</h1>
      <h2>Score: <span>0</span></h2>
      <h2>Top Score: <span>0</span></h2>
    </header>
  )
}

export default Header;
