import React, { Component } from "react";
import { Link } from "react-router-dom";
import eBayLogo from "../../assets/eBay logo.jpg";
import "./eBayDashboard.css";

export default class eBayDashboard extends Component {
  render() {
    return (
      <div className="eBay-dash">
        <div>
          <Link to="/eBay">
            <div className="eBay-course">
              <img className="eBay-img" src={eBayLogo} alt="eBay Course"></img>
            </div>
          </Link>
          Now shall work
        </div>

        <div className="eBay-nav">
          <h1> eBay Phase 1 Fundamentals</h1>

          <div className="eBay-step-list">
            <Link to="/eBayIntro" style={{ textDecoration: "none" }}>
              <p className="eBay-steps"> eBay Introduction </p>{" "}
            </Link>
            <Link to="/eBayStep1" style={{ textDecoration: "none" }}>
              {" "}
              <p className="eBay-steps">
                eBay step 1: eBay and PayPal Accounts
              </p>{" "}
            </Link>
            <Link to="/eBayStep2" style={{ textDecoration: "none" }}>
              <p className="eBay-steps">eBay step 2: Sold Listings Research</p>{" "}
            </Link>
            <p className="eBay-steps"> eBay step 3: Listing an Item</p>
            <p className="eBay-steps"> eBay step 4: Building Feedback</p>
          </div>

          <h1> eBay Phase 2: Wholesale and Suppliers</h1>
          <div className="eBay-step-list">
            <p> eBay Introduction </p>
            <p>eBay step 1: eBay and PayPal Accounts</p>
            <p>eBay step 2: Sold Listings Research</p>
            <p> eBay step 3: Listing an Item</p>
            <p> eBay step 4: Building Feedback</p>
          </div>
        </div>
      </div>
    );
  }
}
