import React, { Component } from 'react';
import Giftees from './Giftees';
import Calendar from './Calendar';

class Main extends Component {

  render () {
    return (
      <div>
        <Giftees />
        <Calendar />

      </div>
    )
  }
}
export default Main;
