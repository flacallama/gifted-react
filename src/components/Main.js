import React, { Component } from 'react';
import Giftees from './Giftees';
import Header from './Header';


class Main extends Component {

  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <Giftees />
        </div>


      </div>
    )
  }
}
export default Main;
