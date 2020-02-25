import React, { Component } from "react";
import "./style.css";
import { ReactComponent as Avatar } from "../avatar.svg";
import { ReactComponent as Arrow } from "../arrow.svg";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }
  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }
  render() {
    let dropdown;
    let arrowDirection;
    if (this.state.isOpened) {
      dropdown = (
        <ul className="dropdown-menu-list">
          <li>
            <a href="#" className="dropdown-menu-item">
              My account
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-menu-item">
              My tasks
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-menu-item">
              Log out
            </a>
          </li>
        </ul>
      );
      arrowDirection = "roll";
    }
    return (
      <div className="menu" onClick={this.toggleState.bind(this)}>
        <Avatar />
        <Arrow className={arrowDirection} />
        <div className="dropdown-menu">{dropdown}</div>
      </div>
    );
  }
}

export default Menu;
