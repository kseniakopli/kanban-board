import React, { Component } from "react";
import Card from "./Card";
import InputItem from "./InputItem";
import InputList from "./InputList";
import "./style.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { isСlicked: false, isUpdated: false };
  }

  toggleState() {
    if (this.state.isСlicked === false) {
      this.setState({ isСlicked: true });
    } else {
      this.setState({ isСlicked: false });
    }
  }

  render() {
    let dropdown;
    if (this.state.isСlicked) {
      if (this.props.id === "backlog") {
        dropdown = <InputItem onBlur={this.props.addTask.bind(this)} />;
      } else {
        dropdown = (
          <InputList
            cardsAll={this.props.cardsAll}
            id={this.props.id}
            changeStatus={this.props.changeStatus}
          />
        );
      }
    }

    let cards = this.props.cards.map(card => {
      return <Card key={card.id} id={card.id} title={card.title} />;
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
