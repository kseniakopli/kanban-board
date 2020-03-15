import React, { Component } from "react";
import "./style.css";

const InputItem = ({onBlur}) => {
  return (
    <div className="card ">
      <input type="text" className="input-item" onBlur={onBlur} />
    </div>
  );
};

export default InputItem;
