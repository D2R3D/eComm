import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import eBayLogo from '../../../assets/eBay logo.jpg'

export default class eBayStep1 extends Component {
    render() {
        return (
            <div className = 'eBay-dash'>
              <Link to ='/eBay'><div className="eBay-course">
          <img className="eBay-img" src={eBayLogo} alt="eBay Course"></img>
          <p> Click to get started on eBay </p>
        </div></Link>

             <div className ='eBay-nav'> 
                <h1> eBay step 1: eBay and PayPal Accounts</h1>
             </div>

            </div>
        )
    }
}
