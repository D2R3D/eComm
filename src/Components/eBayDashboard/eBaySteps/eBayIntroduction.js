import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import eBayLogo from '../../../assets/eBay logo.jpg'


export default class eBayIntroduction extends Component {
    render() {
        return (
            <div>

<Link to ='/eBay'><div className="eBay-course">
          <img className="eBay-img" src={eBayLogo} alt="eBay Course"></img>
          <p> Click to get started on eBay </p>
        </div></Link>

                whoot eBay intro - its a money maker like if you shake what your mama gave ya.
                
            </div>
        )
    }
}
