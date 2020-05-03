import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import eBayLogo from '../../../assets/eBay logo.jpg'
import {connect} from 'react-redux'

class eBayIntroduction extends Component {
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
                <h1> eBay Introduction </h1>

                <Link to ='/eBay'><div className='back'>
                    <p> Return to Steps </p>
                </div>
                </Link>
            
                <h2> Introduction </h2>
                <p> As of today in 2020 eBay has over 182 Million users worldwide. Just under 35% of users in the US access eBay through their mobile app. There has never been an easier time to get your listings in front of potential buyers.
                </p>

                <a href='https://www.oberlo.com/blog/ebay-statistics' target='nonlooper'>Click Here</a> to get the latest eBay statistics

                <p> With that in mind think of the possibilities that could lead to as an eBay seller. An business doesn't get set up to make a few sales here and there, or to go into business to get paid like a hobby. In order to truly capitalize on the market we need to have a different mindset of treating this business like a business and as if it was your job. The great thing about an online business is you can get out of it the effort you put in. If you decide a little bit of effort and time, attitude is enough... Then that is what you can expect to get in return with the business.

                    However if you treat it serious, act like a job, business, work hard, learn, apply yourself and what you've learned. Having a good 
                </p>

                <h2>Objective</h2>
                <p> In this course you will learn how to become a successful eBay seller. The first phase is all about laying a foundation for a successful business. For almost everything that works successfully there is a process behind it. There is never a shortcut or steps you can skip to get results. If you want a garden you have to take specific steps in a specific order to get the best results. The same goes for starting a new business. You can't get very good results without taking very specific steps and following a process.</p>

                <h2> Blueprint for Success </h2>

                <p>If you want to be successful you need to stick to a plan, a schedule, and a burning desire to learn and apply things. When building a house you are not able to begin the finishing touches and all the actual exciting progress until there is a foundation, structure, and a solid plan to follow step by step. That is exactly what you are getting here a solid step to follow. Each step in phase one is designed to help you understand the basics, fundamentals, and get you the structure you need to then begin building a legitmate business.</p>

                <h2> Burning desire for Change</h2>

                <p> Without a desire for change ther won't be much motivation for you to continue. If it isn't required or something that sounds nice but arent' willing to put in the work then your mindset isn't correct yet. There will be times you don't want to work, but in order for something to change.... work must  be done. Without a desire for change you may settle for the same excuses or reasonse of why. I get it life happens and things definitely get put off longer than needed. However if you stay focused to the task at hand, then when life happens there are no excuses. We can either say we focused hard and committed, or take accountability of any areas we could have worked hareder.</p>
            
                 </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {return state}

export default withRouter(connect(mapStateToProps)(eBayIntroduction))