import React, { Component } from "react";
import KanbanBoard from "./KanbanBoard";
import cardList from "./cardList";

class KanbanBoardContainer extends Component {
  render() {
    return <KanbanBoard cards={cardList} updateData={this.updateData} />;
  }
}

export default KanbanBoardContainer;
