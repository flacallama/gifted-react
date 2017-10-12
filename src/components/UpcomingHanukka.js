import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';


class UpcomingHanukka extends Component {



componentWillMount(){
  this.props.getGifteesAction();
}


  render () {


    let theupcoming = this.props.getGiftees
      .filter(giftee=> {
        if(giftee.hanukka){
          return true
        }
      })
      .map(giftee => {
        return <div  key={giftee.id}>{giftee.first_name} {giftee.last_name} Budget: ${giftee.hanukka_price}</div>
      })


    return (
      <div>
        <h4 className="upcomeHeading">Hanukka Gifts</h4>
        {theupcoming}
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getGiftees: state.getGiftees,
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGifteesAction: bindActionCreators(getGiftees, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingHanukka);
