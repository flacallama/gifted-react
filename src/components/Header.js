import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {resetCurId} from '../actions/setCurId';

class Header extends Component {



  render () {
    return (
      <div>
        <div className="nav-wrapper red lighten-2 header headerFixed">
          <nav className="header">
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><NavLink onClick={this.props.resetCurIdAction} to="/"><h5 className='topMargin'>Giftees</h5></NavLink></li>
                <li><NavLink onClick={this.props.resetCurIdAction} to="/upcoming"><h5 className='topMargin'>Upcoming</h5></NavLink></li>
                <li><NavLink onClick={this.props.resetCurIdAction} to="/about"><h5 className='topMargin'>About</h5></NavLink></li>
                <li><NavLink onClick={this.props.resetCurIdAction} to="/tobuy"><h5 className='topMargin'>To Buy</h5></NavLink></li>
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





function matchDispatchToProps(dispatch){
  return {
    resetCurIdAction: bindActionCreators(resetCurId, dispatch)

  }
}
export default connect(null, matchDispatchToProps)(Header);
