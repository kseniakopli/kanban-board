import React, { Component } from "react";
import "./style.css";

const Footer = ({ activeTasks, finishedTasks }) => {
  return (
    <footer className="footer">
      <div>
        <span>Active tasks: {activeTasks}</span>
        <span>Finished tasks: {finishedTasks}</span>
      </div>
      <span>Kanban Board by Ksenia Kopli, 2020</span>
    </footer>
  );
};

export default Footer;
