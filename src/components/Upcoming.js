import React, { Component } from 'react';
import Header from './Header';
import UpcomingBirthdays from './UpcomingBirthdays';
import UpcomingAnniversaries from './UpcomingAnniversaries';
import UpcomingXmas from './UpcomingXmas';
import UpcomingHanukka from './UpcomingHanukka';
import UpcomingEvents from "./UpcomingEvents";
// import UpcomingMothersday from './UpcomingMothersday';

class Upcoming extends Component {

  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <UpcomingEvents />
          <UpcomingBirthdays />
          <UpcomingAnniversaries />
          <UpcomingXmas />
          <UpcomingHanukka />
        </div>
      </div>
    )
  }
}
export default Upcoming;
