import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./style.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">
        <Link to={"/description/" + this.props.id}>{this.props.title}</Link>
        </div>
      </div>
    );
  }
}

export default Card;
