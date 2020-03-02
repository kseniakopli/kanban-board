import React, { Component } from "react";
import "./style.css";
import { ReactComponent as Cross } from "../cross.svg";
import cardList from "./cardList";
import {Link} from 'react-router-dom';

class CardForm extends Component {
  render() {
    console.log(this);
    let card = cardList.find(card => card.id == this.props.match.params.id);
    return (
      <main className="card-form">
        <div className="card-detail">
          <div className="card-form-header">
            <div className="card-form-title">{card.title}</div>
            <button className="btn icon-btn">
            <Link to={"/"}><Cross /></Link>
            </button>
          </div>
          <div className="card-creation-date">01.01.2001</div>
          <div className="card-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </div>
        </div>
      </main>
    );
  }
}

export default CardForm;
