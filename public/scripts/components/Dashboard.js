import React from 'react';
import NewPoll from './NewPoll.js';
import AllPolls from './AllPolls.js';
import Welcome from './Welcome.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/dashboard.css'

const history = createBrowserHistory()

export default class Dashboard extends React.Component {
  render() {
    return (
      <Router history={history} >
        <div>
          <nav>
            <div className="nav-wrapper indigo">
              <a href="#" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/poll/newpoll">New Poll</Link></li>
                <li><Link to="/poll/polls">Polls</Link></li>
                <li><a href="/users/logout">Log Out</a></li>
              </ul>
            </div>
          </nav>
            <Route path="/poll/newpoll" component={NewPoll}/>
            <Route path="/poll/polls" component={AllPolls}/>
            <Route path="/dashboard" component={Welcome}/>
        </div>
      </Router>
    )
  }
}
