import React, { Component } from "react";
import cardList from "./cardList";
import "./style.css";

class InputItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isUpdated: true };
  }
  addTask(e) {
    let newTask = {
      id: cardList.length + 2,
      title: e.target.value,
      status: "backlog"
    };
    cardList.push(newTask);
    this.props.updateData(this.state.isUpdated);
  }
  render() {
    return (
      <div className="card ">
        <input
          type="text"
          className="input-item"
          onBlur={this.addTask.bind(this)}
        />
      </div>
    );
  }
}

export default InputItem;
