import React, { Component } from "react";
import "./Dashboard.css";
import eBayLogo from "../../assetts/eBay logo.jpg";
import amazonLogo from "../../assetts/Amazon/amzLogo.png";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="eBay-course">
          <img className="eBay-img" src={eBayLogo} alt="eBay Course"></img>
          <p> Click here to get started on eBay </p>
        </div>

        <div className="amazon-course">
          <img
            className="amazon-img"
            src={amazonLogo}
            alt="Amazon Course"
          ></img>
          <p> Amazon </p>
        </div>

        <div>
          <p> Future Courses</p>
        </div>
      </div>
    );
  }
}
