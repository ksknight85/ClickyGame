import React from 'react';
import "./style.css";

function Header(props) {
  return (
    <header className="title">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Clicky Game</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Score: <span>{props.score}</span></h2>
          </div>
          <div className="col-md-6">
            <h2>Top Score: <span>{props.topScore}</span></h2>
          </div>
        </div>
        <div className="row instructions">
          <div className="col-md-12">
            <p>Instructions: Click on the images below.  Be careful not to choose the same image twice.</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
