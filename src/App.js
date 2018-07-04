import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'
import './img/valley view icon.png'

const App = () => (
  <Router>
    <div>
      <nav>
        <img src={require("img/valley view icon.png")} width='30px' height='auto' />
        <Link exact to="/">Welcome</Link>
        <Link to="/visit">Visit Us</Link>
        <Link to="/about">About Us</Link>
        <Link to="/resources">Resources</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
