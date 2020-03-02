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
        />
        <List
          id="ready"
          title="Ready"
          cards={this.props.cards.filter(card => card.status === "ready")}
        />
        <List
          id="in-progress"
          title="In Progress"
          cards={this.props.cards.filter(card => card.status === "in-progress")}
        />
        <List
          id="finished"
          title="Finished"
          cards={this.props.cards.filter(card => card.status === "finished")}
        />

      </main>
    );
  }
}
export default KanbanBoard;
