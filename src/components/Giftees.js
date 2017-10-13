import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';
import Giftee from './Giftee'
import AddGiftee from './AddGiftee'

class Giftees extends Component {

componentWillMount(){
  this.props.getGifteesAction();
}

  render () {
    let thegiftees = this.props.getGiftees.map(giftee => {
      return <Giftee key={giftee.id} giftee={giftee} />
    })

    let gifteesLength = this.props.getGiftees.length;

    return (
      <div>
        <span className='center'><h3>You Have {gifteesLength} Gift Recipients</h3></span> 
        <span>{thegiftees} </span>
        <AddGiftee className="verticalAlignMiddle"/>

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
export default connect(mapStateToProps, matchDispatchToProps)(Giftees);
