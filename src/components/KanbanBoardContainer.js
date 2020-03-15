import React, { Component } from "react";
import KanbanBoard from "./KanbanBoard";
import update from "react-addons-update";

class KanbanBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          title: "Login page – performance issues",
          status: "backlog"
        },
        {
          id: 2,
          title: "Shop page – performance issues",
          status: "ready"
        },
        {
          id: 3,
          title: "User page – performance issues",
          status: "in-progress"
        },
        {
          id: 4,
          title: "Main page – performance issues",
          status: "finished"
        }
      ]
    };
  }
  addTask(e) {
    let cardIndex = this.state.cards.length;
    let newTask = {
      id: cardIndex + 1,
      title: e.target.value,
      status: "backlog"
    };
    let nextState = update(this.state.cards, { $push: [newTask] });
    this.setState({ cards: nextState });
  }

  changeStatus(e) {
/*

  
*/
  }

  render() {
    let activeTasksCounter = 0;
    let finishedTasksCounter = 0;
    for (let i = 0; i < this.state.cards.length; i++) {
      if (this.state.cards[i].status == "backlog") {
        activeTasksCounter++;
      }
      if (this.state.cards[i].status === "finished") {
        finishedTasksCounter++;
      }
    }

    return (
      <KanbanBoard
        cards={this.state.cards}
        addTask={this.addTask.bind(this)}
        changeStatus={this.changeStatus.bind(this)}
      />
    );
  }
}

export default KanbanBoardContainer;
