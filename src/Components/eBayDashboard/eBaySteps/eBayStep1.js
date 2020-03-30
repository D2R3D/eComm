import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import eBayLogo from '../../../assets/eBay logo.jpg'

export default class eBayStep1 extends Component {
    render() {
        return (
            <div className = 'eBay-dash'>
              <Link to ='/eBay'><div className="eBay-course">
          <img className="eBay-img" src={eBayLogo} alt="eBay Course"></img>
        </div></Link>

             <div className ='eBay-nav'> 
                <h1> eBay step 1: eBay and PayPal Accounts</h1>
                <p>back to steps</p>
                <h2> Introduction</h2>

                <p> In this section we will cover how to set up your eBay Seller account and PayPal account. If you already have these acounts set up and linked to each other you won't need to do anything and can continue to step 2</p>
             </div>

            </div>
        )
    }
}
