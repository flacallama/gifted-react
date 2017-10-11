import React, { Component } from 'react';
import Header from './Header';
import UpcomingBirthdays from './UpcomingBirthdays';

class Upcoming extends Component {

  render () {
    return (
      <div>
        <Header />
        <UpcomingBirthdays />
      </div>
    )
  }
}
export default Upcoming;
