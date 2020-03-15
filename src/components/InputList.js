import React, { Component } from "react";
import "./style.css";

import "./style.css";

class InputList extends Component {
  render() {
    let tasks;
    let taskslist;
    if (this.props.id === "ready") {
      tasks = this.props.cardsAll.filter(card => card.status === "backlog");
    }
    if (this.props.id === "in-progress") {
      tasks = this.props.cardsAll.filter(card => card.status === "ready");
    }
    if (this.props.id === "finished") {
      tasks = this.props.cardsAll.filter(card => card.status === "in-progress");
    }
    console.log(tasks);
    taskslist = tasks.map(task => {
      return (<option>{task.title}</option>);
    });

    return (
      <select className="dropdown-task-list" onChange={this.props.changeStatus}>
        <option defaultValue>Выбрать</option>
        {taskslist}
      </select>
    );
  }
}

export default InputList;
