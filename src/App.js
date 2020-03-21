import React, { Component } from "react";
import KanbanBoardContainer from "./components/KanbanBoardContainer";
import CardForm from "./components/CardForm";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import "./components/style.css";

class App extends Component {
 

  render() {
    return (
      <div className="kanban-board">
        <Header />
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route path="/" exact component={KanbanBoardContainer} />
            <Route path="/description/:id" component={CardForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
