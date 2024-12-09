import React from "react";
import "./Test.css";

const Test = () => {
  return (
    <div className="infinite-slider">
      <div className="slider-track">
        <div className="card">Test1</div>
        <div className="card">Test2</div>
        <div className="card">Test3</div>
        <div className="card">Test4</div>
        <div className="card">Test5</div>
        <div className="card">Test6</div>
        {/* Duplicate cards for seamless infinite effect */}
        <div className="card">Test1</div>
        <div className="card">Test2</div>
        <div className="card">Test3</div>
        <div className="card">Test4</div>
        <div className="card">Test5</div>
        <div className="card">Test6</div>
      </div>
    </div>
  );
};

export default Test;
