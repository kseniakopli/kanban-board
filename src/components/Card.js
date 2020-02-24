import React, { Component } from "react";
import './style.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__title">{this.props.title}</div>
      </div>
    );
  }
}

export default Card;
