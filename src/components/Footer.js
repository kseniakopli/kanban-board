import React, { Component } from "react";
import cardList from "./cardList";
import "./style.css";

class Footer extends Component {
  render() {
    let activeTasksCounter = 0;
    let finishedTasksCounter = 0;
    for (let i = 0; i < cardList.length; i++) {
      if (cardList[i].status === "backlog") {
        activeTasksCounter++;
      }
      if (cardList[i].status === "finished") {
        finishedTasksCounter++;
      }
    }
console.log(activeTasksCounter);
    return (
      <footer className="footer">
        <div>
          <span className='brief-info'>Active tasks: {activeTasksCounter}</span>
          <span className='brief-info'>Finished tasks: {finishedTasksCounter}</span>
        </div>
        <span>Kanban Board by Ksenia Kopli, 2020</span>
      </footer>
    );
  }
}

export default Footer;
