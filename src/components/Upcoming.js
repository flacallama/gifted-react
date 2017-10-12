import React, { Component } from 'react';
import Header from './Header';
import UpcomingBirthdays from './UpcomingBirthdays';
import UpcomingAnniversaries from './UpcomingAnniversaries';
import UpcomingXmas from './UpcomingXmas';
import UpcomingHanukka from './UpcomingHanukka';
import UpcomingMothersday from './UpcomingMothersday';

class Upcoming extends Component {

  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <UpcomingBirthdays />
          <UpcomingAnniversaries />
          <UpcomingXmas />
          <UpcomingMothersday />
          <UpcomingHanukka />
        </div>
      </div>
    )
  }
}
export default Upcoming;
