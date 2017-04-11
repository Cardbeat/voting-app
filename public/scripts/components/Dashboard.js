import React from 'react';
import NewPoll from './NewPoll.js';
import AllPolls from './AllPolls.js';
import Welcome from './Welcome.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './css/dashboard.css'


export default class Dashboard extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="nav-wrapper indigo">
              <a href="#" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/newpoll">New Poll</Link></li>
                <li><Link to="/polls">Polls</Link></li>
                <li><a href="/users/logout">Log Out</a></li>
              </ul>
            </div>
          </nav>
            <Route path="/newpoll" component={NewPoll}/>
            <Route path="/polls" component={AllPolls}/>
            <Route path="/dashboard" component={Welcome}/>
        </div>
      </Router>
    )
  }
}