import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';
import { addIdea } from '../actions/getGifts';
import Gift from './Gift'


class Gifts extends Component {



  render () {
      console.log('props in gifts', this.props);
    let thegifts = this.props.getGifts
      .filter(gift => {
        if (gift.giftee_id === this.props.giftee.id){
          return true
        }
      })
      .map(gift => {
        return <Gift key={gift.id} gift={gift} giftee={this.props.giftee}/>
      })
    return (
      <div>
        Gift Ideas:
        {thegifts}








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
    addIdeaAction: bindActionCreators(addIdea, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Gifts);
