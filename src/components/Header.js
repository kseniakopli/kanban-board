import React from "react";
import Menu from "./Menu";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <span className="header-title">Awesome Kanban Board</span>
      <Menu />
    </header>
  );
};

export default Header;
