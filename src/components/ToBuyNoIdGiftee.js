import React, { Component } from 'react';
class ToBuyNoIdGiftee extends Component {

  render () {
    let {giftee} = this.props;
    console.log("giftee from noidgiftee", giftee)
    return (
      <div>
        <p></p>
        <p>working</p>
      </div>
    )
  }
}
export default ToBuyNoIdGiftee;
