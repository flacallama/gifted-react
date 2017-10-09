import React, { Component } from 'react';
class Giftee extends Component {

  render () {
    let giftee = this.props.giftee;
    return (
      <div>
        {giftee.first_name} {giftee.last_name}
      </div>
    )
  }
}
export default Giftee;
