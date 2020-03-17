import React, {Component} from 'react';
import routes from './routes'
import './App.css'
import Nav from './Components/Nav/Nav'
import 'reset-css'


export default class App extends Component {
  render() {
  return (
    <div>
      <Nav/>
      {routes}
    </div>
  );
  }
}
