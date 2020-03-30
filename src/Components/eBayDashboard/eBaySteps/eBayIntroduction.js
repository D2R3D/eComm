import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import eBayLogo from '../../../assets/eBay logo.jpg'


export default class eBayIntroduction extends Component {
    render() {
        return (
            <div className = 'eBay-dash'>

<Link to ='/eBay'><div className="eBay-course">
          <img className="eBay-img" src={eBayLogo} alt="eBay Course"></img>
        </div></Link>

                <div className ='eBay-nav'> 
                <h1> eBay Introduction </h1>

                <div>
                    <p>Back To Steps</p>
                </div>
                <p> Hello and welcome to the eBay Seller Course Introduction</p>
                <h2> Introduction </h2>
                <p> As of today in 2020 eBay has over 182 Million users worldwide. Just under 35% of users in the US access eBay through their mobile app. There has never been an easier time to get your listings in front of potential buyers.</p>

                <a href='https://www.oberlo.com/blog/ebay-statistics' target='nonlooper'>Click Here for the latest eBay statistics</a>

                <h2>Objective</h2>
            
                 </div>
                
            </div>
        )
    }
}
