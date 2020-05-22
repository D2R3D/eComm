import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import eBayLogo from '../../../assets/eBay logo.jpg'
import eBayRegister1 from '../../../assets/eBay/eBay-register.jpg'
import eBayRegister2 from '../../../assets/eBay/eBay-register2.jpg'
import eBayAcct from '../../../assets/eBay/eBay-acct.jpg'

export default class eBayStep1 extends Component {
    render() {
        return (
            <div className = 'eBay-dash'>
            <div>
            <Link to ='/eBay'><div className="eBay-course">
        <img className="eBay-img" src={eBayLogo} alt="eBay Course"></img>
      </div></Link>

          Now shall work
           </div> 

             <div className ='eBay-nav'> 
                <h1> eBay step 1: eBay and PayPal Accounts</h1>
                <p>back to steps</p>
                <h2> Introduction</h2>

                <p> In this section we will cover how to set up your eBay Seller account and PayPal account. If you already have these acounts set up and linked to each other you won't need to do anything and can continue to step 2</p>

                <h2> Objective</h2>

                <p> In this step there are Two objectives we want to have completed. The best way to begin is to set up a personal account for both. Unless you have a Business License, LLC, or EIN do not set up a business account for these yet. By the end of this step you should</p>

                <ul>
                    <li> Have an account for eBay and Paypal</li>
                    <li> Know the differences between the two and how they are linked.</li>
                    <li> Get a basic understanding of each platform</li>
                </ul>

                <h2> Creating your eBay account</h2>

                <p> The eBay platform is where you will actually be listing and posting an item for sale. In order to use it we will need to set up our free accounts. Links below will take you straight to the register page and provided images of what they look like. </p>

                <p> If you go <a className='links' href ='https://www.ebay.com' target='nonlooper'> directly to their website </a> this is what the top left corner will look like so you can register.</p>
                <a href='https://www.ebay.com' target='nonlooper'> <img className='eBay-reg' src={eBayRegister1} alt='eBay-Registeration'></img>
                </a>
                <p> If you <a className='links' href='https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2F' target='nonlooper'> click this link</a> it will take you to what the registration page looks like. </p>
              
                
                <a href='https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2F' target='nonlooper'> <img  className='eBay-create' src={eBayRegister2} alt='eBayAccount'></img></a>

                <p> <a className='links' href='https://reg.ebay.com/reg/PartialReg?siteid=0&co_partnerId=0&UsingSSL=1&rv4=1&ru=https%3A%2F%2Fwww.ebay.com%2F&signInUrl=https%3A%2F%2Fwww.ebay.com%2Fsignin%3Fsgn%3Dreg%26siteid%3D0%26co_partnerId%3D0%26UsingSSL%3D1%26rv4%3D1%26ru%3Dhttps%253A%252F%252Fwww.ebay.com%252F' target='nonlooper'> This last link </a> will be the final information you will need to fill out to register.</p>

                <a href='https://reg.ebay.com/reg/PartialReg?siteid=0&co_partnerId=0&UsingSSL=1&rv4=1&ru=https%3A%2F%2Fwww.ebay.com%2F&signInUrl=https%3A%2F%2Fwww.ebay.com%2Fsignin%3Fsgn%3Dreg%26siteid%3D0%26co_partnerId%3D0%26UsingSSL%3D1%26rv4%3D1%26ru%3Dhttps%253A%252F%252Fwww.ebay.com%252F' target ='nonlooper'> <img className='eBay-create' src={eBayAcct} alt='create account'></img></a>

                <p> </p>
             </div>

            </div>
        )
    }
}
