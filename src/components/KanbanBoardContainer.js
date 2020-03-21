import React, { Component } from "react";
import KanbanBoard from "./KanbanBoard";
import Footer from "./Footer";
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
    if (e.target.value) {
      let newTask = {
        id: cardIndex + 1,
        title: e.target.value,
        status: "backlog"
      };
      let nextState = update(this.state.cards, { $push: [newTask] });
      this.setState({ cards: nextState });
      e.target.value = "";
    }
  }

  changeStatus(e) {
    let prevStateArr = this.state.cards.filter(
      card => card.id == e.target.value
    );
    let prevState = prevStateArr[0];
    let index = prevState.id - 1;
    let newStatus;
    if (prevState.status === "backlog") {
      newStatus = "ready";
    }
    if (prevState.status === "ready") {
      newStatus = "in-progress";
    }
    if (prevState.status === "in-progress") {
      newStatus = "finished";
    }
    let nextStateItem = prevState;
    nextStateItem.status = newStatus;
    let nextState = update(this.state.cards, {
      index: {
        $set: nextStateItem
      }
    });
    this.setState({ cards: nextState });
    e.target.value = 0;
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
      <div>
        <KanbanBoard
          cards={this.state.cards}
          addTask={this.addTask.bind(this)}
          changeStatus={this.changeStatus.bind(this)}
        />
        <Footer
          activeTasksCounter={activeTasksCounter}
          finishedTasksCounter={finishedTasksCounter}
        />
      </div>
    );
  }
}

export default KanbanBoardContainer;
