import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';
var moment = require('moment');
moment().format();

class UpcomingAnniversaries extends Component {

state = {
  ready: false
}

componentWillMount(){
  this.props.getGifteesAction();
  this.setState({ready:true})
}


  render () {
    let ttoday = new Date();
    var ts = moment(ttoday).valueOf();
    var m = moment(ts);
    var todaysDate = m.format("MM/DD");
    console.log("todaysDate", todaysDate);

    let theupcoming = this.props.getGiftees
      .filter(giftee=> {
        console.log(giftee.annidate)
        if(giftee.annidate){
          return true
        }
      })
      .sort((a,b) => {
        if(a[moment().format("annidate", "MM/DD")] > b[moment().format("annidate", "MM/DD")]) {
          return 1;
        } else if(a[moment().format("annidate", "MM/DD")] < b[moment().format("annidate", "MM/DD")]) {
            return -1;
          } else {
            return 0;
          }
        })
      .filter(giftee => {
        ;
        if(parseInt(giftee.annidate.slice(5,10)) >= parseInt(todaysDate)){
          return true;
        }
      })
      .map(giftee => {
        return <div>{giftee.first_name} {giftee.annidate.slice(5,10)}</div>
      })


    return (
      <div>
        <h4 className="upcomeHeading">Anniversaries</h4>
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
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingAnniversaries);
