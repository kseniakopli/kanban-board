import React, { Component } from "react";
import Card from "./Card";
import InputItem from "./InputItem";
import "./style.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { isСlicked: false, isUpdated: false };
  }
  toggleState() {
    this.setState({ isСlicked: !this.state.isClicked });
  }
  updateData = value => {
    this.setState({ isUpdated: !this.state.isUpdated });
  };
  render() {
    let dropdown;

    if (this.state.isСlicked) {
      dropdown = <InputItem updateData={this.updateData} />;
      if (this.state.isUpdated) {
        dropdown = undefined;
      }
    }

    let cards = this.props.cards.map(card => {
      return <Card key={card.id} id={card.id} title={card.title}/>;
    });

    return (
      <div>
        <div className="list">
          <h1 className="title">{this.props.title}</h1>
          {cards}
          {dropdown}
          <button className="btn" onClick={this.toggleState.bind(this)}>
            + Add card
          </button>
        </div>
      </div>
    );
  }
}
export default List;
