import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">
          <Link
            to={{
              pathname: "/description/" + this.props.id,
              propsSearch: this.props.title
            }}
          >
            {this.props.title}
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
