import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'
import {updateUser, logout} from '../../ducks/reducer'
import './Nav.css'


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dashboard: '',
            tools: '',
            contact: '',
            profile: ''
        }
    }

        handleClick = val => {
            this.props.hisotry.push(`/${val})`)
        }
        logout = () => {
            axios.delete('/api/user/logout').then( () => {
                this.props.history.push('/');
            });
        }
    render() {
        if (this.props.location.pathname === '/') {
        return null;
    } else {
        return(
     <div className='navbar'>

                <div className='logged-in'>
                   <Link to='/dashboard' style ={{textDecoration:'none'}}> 
                   <p className='dash-links'> Dashboard </p> </Link> 

                   <Link to ='/tools' style={{textDecoration:'none'}}><p className='dash-links'> Tools</p></Link>

                    <p className='dash-links'> Contact </p>

                    <p className='dash-links'> Profile </p>

            <div>
             <button className='logout-btn' onClick={this.logout}> Logout </button>
             </div>

                </div>
       
      </div>
        )
      }
   }

}

function mapStateToProps(state) {
    return state;
}
export default withRouter(connect(mapStateToProps, {updateUser, logout})(Nav))