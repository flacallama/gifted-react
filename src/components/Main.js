import React, { Component } from 'react';
import Giftees from './Giftees';
import Header from './Header';


class Main extends Component {

  render () {
    return (
      <div>
        <Header />

        <Giftees />

      </div>
    )
  }
}
export default Main;
