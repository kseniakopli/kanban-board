import React, { Component } from "react";
import './style.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Card;
