import React, { Component } from "react";
import './style.css';

const Button = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className="btn">
        + Add card
    </button>
  )
}

export default Button;