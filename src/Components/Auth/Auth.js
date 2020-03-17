import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { updateUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val
    });
  }; 

  login = () => {
      const {username, password} = this.state
   axios
      .post('/api/user/login', {username, password}).then(res => {
          this.props.updateUser(res.data.user)
          this.props.history.push('/dashboard')
      })
      .catch(err => {
          Swal.fire('username or password incorrect')
      })
    }
  

  render() {
    return (
      <div className="main">
        <div className="login-box">
          <div className="inputs">
            <input type='text'
              placeholder="username"
              onChange={e => this.handleChange("username", e.target.value)}
            />
            <input placeholder = 'password'
            onChange={e => this.handleChange('password', e.target.value)}
            type='password'/>

            <button className='authButton' onClick={this.login}>
                 Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser
    }
}
export default withRouter(connect(mapDispatchToProps)(Auth))