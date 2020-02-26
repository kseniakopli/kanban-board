import React, { Component } from "react";
import Card from "./Card";
import InputItem from "./InputItem";
import "./style.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { isСlicked: false };
  }
  toggleState() {
    this.setState({ isClicked: true });
  }
  render() {
    let dropdown;

    if (this.state.isСlicked === true) {
      dropdown = <InputItem />;
    }

    let cards = this.props.cards.map(card => {
      return <Card id={card.id} title={card.title} />;
    });

    return (
      <div>
        <div className="list">
          <h1 className="title">{this.props.title}</h1>
          {cards}
          <button className="btn" onClick={this.toggleState.bind(this)}>
            + Add card
          </button>
          {dropdown}
        </div>
      </div>
    );
  }
}
export default List;
