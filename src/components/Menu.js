import React, { Component } from "react";
import "./style.css";
import {ReactComponent as Avatar} from "../avatar.svg";
import {ReactComponent as Arrow} from "../arrow.svg";

class Menu extends Component {

  render() {
    return (
      <div className="Menu">
        <Avatar/>
        <Arrow/>
      </div>
    );
  }
}

export default Menu;
