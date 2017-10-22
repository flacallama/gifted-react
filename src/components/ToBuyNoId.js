import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGiftees } from '../actions/getGiftees';
import ToBuyNoIdGiftee from './ToBuyNoIdGiftee';


class ToBuyNoId extends Component {

  componentWillMount(){
    this.props.getGifteesAction();
  }

  render () {
    let {getGiftees} = this.props;
    console.log('giftees from noid', getGiftees);
    let theGiftees = getGiftees.map(giftee => {
      // console.log('gifteeee', giftee);
      <ToBuyNoIdGiftee key={giftee.id} giftee={giftee} />
    })
    return (
      <div>
        {theGiftees}

      </div>
    )
  }
}


function mapStateToProps(state, props){
  return {
    getGiftees: state.getGiftees
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGifteesAction: bindActionCreators(getGiftees, dispatch)

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(ToBuyNoId);

//
// {theGiftees ? {theGiftees} : <p>nope</p>}
//   {theGiftees}
//   asdfasd
