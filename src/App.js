import React, { Component } from "react";
import { render } from "react-dom";
import KanbanBoard from "./components/KanbanBoard";
import Header from "./components/Header";
import Footer from "./components/Footer";
let cardsList = [
  {
      id: 1,
      title: "Login page – performance issues",
      status: "backlog",
  },
  {
      id: 2,
      title: "Sprint bugfix",
      status: "backlog",
  },
  {
    id: 3,
    title: "Shop page – performance issues",
    status: "ready",
},
{
  id: 4,
  title: "Checkout bugfix",
  status: "ready",
},
{
  id: 5,
  title: "Shop bug1",
  status: "ready",
},
{
  id: 6,
  title: "User page – performance issues",
  status: "in-progress",
},
{
  id: 7,
  title: "Auth bugfix",
  status: "in-progress",
},
{
  id: 8,
  title: "Main page – performance issues",
  status: "finished",
},
{
  id: 9,
  title: "Main page bugfix",
  status: "finished",
},
];

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <KanbanBoard cards={cardsList} />
        <Footer/>
      </div>
    );
  }
}

export default App;
