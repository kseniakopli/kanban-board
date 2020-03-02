import React, { Component } from "react";
import KanbanBoardContainer from "./components/KanbanBoardContainer";
import CardForm from "./components/CardForm";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route path="/" exact component={KanbanBoardContainer} />
            <Route path="/description/:id" component={CardForm} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
