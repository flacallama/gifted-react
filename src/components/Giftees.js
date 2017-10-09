import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';
import Giftee from './Giftee'


class Giftees extends Component {

componentWillMount(){
  this.props.getGifteesAction();
}

  render () {
    let thegiftees = this.props.getGiftees.map(giftee => {
      return <Giftee key={giftee.id} giftee={giftee} />
    })
    return (
      <div>
        <span>Giftee:</span> <span>{thegiftees} </span>

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
