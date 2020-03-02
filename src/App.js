import React, { Component } from "react";
import KanbanBoardContainer from "./components/KanbanBoardContainer";
import CardForm from "./components/CardForm";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Router history={createBrowserHistory()}>
        <Route path="/" exact component={KanbanBoardContainer} />
        <Route path="description/:id" component={CardForm} />
      </Router>
      <Footer/>
      </div>
    );
  }
}

export default App;
