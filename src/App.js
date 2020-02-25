import React, { Component } from "react";
import KanbanBoard from "./components/KanbanBoard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cardList from "./components/cardList"

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <KanbanBoard cards={cardList} />
        <Footer/>
      </div>
    );
  }
}

export default App;

