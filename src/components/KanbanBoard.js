import React, { Component } from "react";
import List from "./List";
import "./style.css";


class KanbanBoard extends Component {
  render() {
    return (
      <main className="app">
        <List
          id="backlog"
          title="Backlog"
          cards={this.props.cards.filter(card => card.status === "backlog")}
          addTask={this.props.addTask}
          changeStatus={this.props.changeStatus}
          cardsAll={this.props.cards}
        />
        <List
          id="ready"
          title="Ready"
          cards={this.props.cards.filter(card => card.status === "ready")}
          addTask={this.props.addTask}
          changeStatus={this.props.changeStatus}
          cardsAll={this.props.cards}
        />
        <List
          id="in-progress"
          title="In Progress"
          cards={this.props.cards.filter(card => card.status === "in-progress")}
          addTask={this.props.addTask}
          changeStatus={this.props.changeStatus}
          cardsAll={this.props.cards}
        />
        <List
          id="finished"
          title="Finished"
          cards={this.props.cards.filter(card => card.status === "finished")}
          addTask={this.props.addTask}
          changeStatus={this.props.changeStatus}
          cardsAll={this.props.cards}
        />
      </main>
    );
  }
}
export default KanbanBoard;
