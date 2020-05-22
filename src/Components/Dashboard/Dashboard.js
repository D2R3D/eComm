import React, { Component } from "react";
import "./Dashboard.css";
import eBayLogo from "../../assets/eBay logo.jpg";
import amazonLogo from "../../assets/Amazon/amzLogo.png";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
        <div className='dash-nav'>
      <div className="course-nav">
        <Link to="/eBay">
          <div className="eBay-course">
            <img className="eBay-img" src={eBayLogo} alt="eBay Course"></img>
            <p> Click to get started on eBay </p>
          </div>
        </Link>

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
      <div className ='goals'>
        <div className ='success-story'>

          <form id='success-form' action=''>
            <h1>Add a Success Story</h1>
            <p><input placeholder='Enter Dollar Amount'></input></p>
            <div class='tab'>

            </div>


          </form>
        <p> Enter a Success Story</p>
          <select>
            <option value='0'> Select Source </option>
            <option value='1'> eBay </option>
            <option value='2'> Amazon</option>
            <option value='3'>Website</option>
          </select>
          <p> Enter Total Dollar amount </p>
          <input placeholder='Gross dollar amount'></input>
          <p>How have your mentors helped you through the process of making sales</p>

          <button> Review and Submit </button>
        
          </div>
      </div>

      </div>
    );
  }
}
