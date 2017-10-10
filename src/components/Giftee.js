import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';
import IconGiftee from './IconGiftee';

import Gifts from './Gifts'

import NewIdea from './NewIdea';

class Giftee extends Component {

  componentWillMount() {
    this.props.getGiftsAction();
  }

  render () {
    let giftee = this.props.giftee;
    return (
      <div>
        {giftee.first_name} {giftee.last_name} {giftee.relationship}
        <Gifts giftee={giftee}/>
        <NewIdea giftee={giftee}/>
        <IconGiftee giftee={giftee} />


      </div>
    )
  }
}
function mapStateToProps(state, props){
  return {
    getGifts: state.getGifts
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGiftsAction: bindActionCreators(getGifts, dispatch),

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Giftee);
