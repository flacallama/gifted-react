import React, { Component } from 'react';
import Header from './Header';
import UpcomingBirthdays from './UpcomingBirthdays';
import UpcomingAnniversaries from './UpcomingAnniversaries';
import UpcomingXmas from './UpcomingXmas';

class Upcoming extends Component {

  render () {
    return (
      <div>
        <Header />
        <UpcomingBirthdays />
        <UpcomingAnniversaries />
        <UpcomingXmas />
      </div>
    )
  }
}
export default Upcoming;
