import {Switch, Route} from 'react-router-dom';
import React from 'react'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import eBayDashboard from './Components/eBayDashboard/eBayDashboard'
import eBayIntroduction from './Components/eBayDashboard/eBaySteps/eBayIntroduction'
import eBayStep1 from './Components/eBayDashboard/eBaySteps/eBayStep1'
import eBayStep2 from './Components/eBayDashboard/eBaySteps/eBayStep2'

export default (
    <Switch>
        <Route exact path ='/' component = {Auth} />
        <Route path = '/dashboard' component = {Dashboard} />
        <Route path = '/eBay' component = {eBayDashboard} />
        <Route path = '/eBayIntro' component ={eBayIntroduction} />
        <Route path = '/eBayStep1' component = {eBayStep1} />
        <Route path = '/eBayStep2' component = {eBayStep2} />


    </Switch>
)