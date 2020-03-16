import React, { Component } from "react";
import "./style.css";

import "./style.css";

class InputList extends Component {
  render() {
    let tasks, taskslist;
    if (this.props.id === "ready") {
      tasks = this.props.cardsAll.filter(card => card.status === "backlog");
    }
    if (this.props.id === "in-progress") {
      tasks = this.props.cardsAll.filter(card => card.status === "ready");
    }
    if (this.props.id === "finished") {
      tasks = this.props.cardsAll.filter(card => card.status === "in-progress");
    }
    taskslist = tasks.map(task => {
      return (<option value={task.id}>{task.title}</option>);
    });

    return (
      <select className="dropdown-task-list" onChange={this.props.changeStatus.bind(this)}>
        <option defaultValue>Choose</option>
        {taskslist}
      </select>
    );
  }
}

export default InputList;
