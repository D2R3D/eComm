import {Switch, Route} from 'react-router-dom';
import React from 'react'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import eBayDashboard from './Components/eBayDashboard/eBayDashboard'
import eBayStep1 from './Components/eBayDashboard/eBaySteps/eBayStep1'


export default (
    <Switch>
        <Route exact path ='/' component = {Auth} />
        <Route path = '/dashboard' component = {Dashboard} />
        <Route path = '/eBay' component = {eBayDashboard} />
        <Route path = '/eBayStep1' component = {eBayStep1} />


    </Switch>
)