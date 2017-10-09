import React, { Component } from 'react';
class Gift extends Component {

  render () {
    let gift = this.props.gift;
    return (
      <div>{gift.idea}</div>
    )
  }
}
export default Gift;
