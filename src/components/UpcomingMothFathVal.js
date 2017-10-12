import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';


class UpcomingMothFathVal extends Component {



componentWillMount(){
  this.props.getGifteesAction();
}


  render () {


    let theupcoming = this.props.getGiftees
      .filter(giftee=> {
        if(giftee.mothersday || giftee.fathersday || giftee.valentines){
          return true
        }
      })
      .map(giftee => {
        return <div>{giftee.first_name} {giftee.last_name} Budget:{giftee.budget}</div>
      })


    return (
      <div>
        <h4 className="upcomeHeading">Mothers/Fathers day, Valentines</h4>
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
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingMothFathVal);
