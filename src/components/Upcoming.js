import React, { Component } from 'react';
import Header from './Header';
import UpcomingBirthdays from './UpcomingBirthdays';
import UpcomingAnniversaries from './UpcomingAnniversaries';

class Upcoming extends Component {

  render () {
    return (
      <div>
        <Header />
        <UpcomingBirthdays />
        <UpcomingAnniversaries />
      </div>
    )
  }
}
export default Upcoming;
