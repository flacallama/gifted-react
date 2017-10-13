import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Header extends Component {

  render () {
    return (
      <div>
        <div className="nav-wrapper red lighten-2 header headerFixed">
          <nav className="header">
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><NavLink to="/"><h5 className='topMargin'>Home</h5></NavLink></li>
                <li><NavLink to="/upcoming"><h5 className='topMargin'>Upcoming</h5></NavLink></li>
                <li><NavLink to="/about"><h5 className='topMargin'>About</h5></NavLink></li>
              </ul>
              <div className="inline right">

                <div className="hit-the-floor">gifted</div>
              </div>
          </nav>
        </div>
        <div className="headerBlock"></div>
      </div>

    )
  }
}
export default Header;
