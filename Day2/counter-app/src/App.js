import React, { useState } from "react";

const App = ({ name }) => {
  let [score, setScore] = useState(0);
  return (
    <div className="main">
      <h1 className="heading">Hello this is {name}</h1>
      <h3>Welcome to my Counter Application</h3>
      <div className="box">
        <h2 className="score"> {score}</h2>
        <div className="controls">
          <button
            className="btn"
            onClick={() => {
              score < 25 ? setScore(score + 1) : setScore(25);
            }}
          >
            {" "}
            Increase{" "}
          </button>
          <button
            className="btn"
            onClick={() => {
              setScore(0);
            }}
          >
            {" "}
            Reset{" "}
          </button>
          <button
            className="btn"
            onClick={() => {
              score > 0 ? setScore(score - 1) : setScore(0);
            }}
          >
            {" "}
            Decrease{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
