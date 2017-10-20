import React, { Component } from 'react';
import Header from './Header';
import UpcomingEvents from "./UpcomingEvents";
// import UpcomingMothersday from './UpcomingMothersday';

class Upcoming extends Component {

  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <UpcomingEvents />
        </div>
      </div>
    )
  }
}
export default Upcoming;
