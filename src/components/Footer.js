import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    let activeTasksCounter = 0;
    let finishedTasksCounter = 0;

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