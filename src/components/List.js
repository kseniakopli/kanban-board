import React, { Component } from "react";
import Card from "./Card";
import Button from "./Button";
import "./style.css";
class List extends Component {
  render() {
    let cards = this.props.cards.map(card => {
      return <Card id={card.id} title={card.title} />;
    });
    return (
      <div>
        <div className="list">
          <h1 className="title">{this.props.title}</h1>
          {cards}
          <Button />
        </div>
      </div>
    );
  }
}
export default List;
