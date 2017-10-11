import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Header extends Component {

  render () {
    return (
      <div className="nav-wrapper red lighten-2 header">
        <nav className="header">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/upcoming">Upcoming</NavLink></li>
            </ul>
            <div className="inline">

            </div>
        </nav>
      </div>
    )
  }
}
export default Header;
