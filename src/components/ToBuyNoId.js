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
      return <ToBuyNoIdGiftee key={giftee.id} giftee={giftee} />
    })
    console.log("theGiftees", theGiftees)
    return (
      <div>
        {theGiftees.length > 0 ? theGiftees : 'not yet'}
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
    getGifteesAction: bindActionCreators(getGiftees, dispatch),
    // setCurIdAction: bindActionCreators(setCurId, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(ToBuyNoId);

//
// {theGiftees ? {theGiftees} : <p>nope</p>}
//   {theGiftees}
//   asdfasd
