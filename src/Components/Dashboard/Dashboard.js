import React, { Component } from "react";
import "./Dashboard.css";
import eBayLogo from "../../assets/eBay logo.jpg";
import amazonLogo from "../../assets/Amazon/amzLogo.png";
import{Link} from 'react-router-dom'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Link to ='/eBay'><div className="eBay-course">
          <img className="eBay-img" src={eBayLogo} alt="eBay Course"></img>
          <p> Click to get started on eBay </p>
        </div></Link>

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
