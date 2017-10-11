import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';
import UpcomingBirthday from './UpcomingBirthday';
import Moment from "react-moment";
import {sortByDate} from '../actions/sortByDate';
var moment = require('moment');
moment().format();

class UpcomingBirthdays extends Component {

state = {
  ready: false
}

componentWillMount(){
  this.props.getGifteesAction();
  this.setState({ready:true})
}

  // theupcoming = () => {
  //   if(this.props.getGiftees.length > 0){
  //     console.log('theupcoming is working');
  //     this.props.getGiftees.map(giftee => {
  //       console.log("giftee", giftee.first_name);
  //       return (
  //         <p>adsfsd</p>
  //
  //       )
  //       })
  //     }
  //   }
  render () {
    this.props.sortByDateAction()
    let theupcoming = this.props.getGiftees
      .filter(giftee=> {
        if(giftee.birthdate){
          return true
        }
      })

      .sort((a,b) => {
        if(a["birthdate"] > b["birthdate"]) {
          return 1;
          } else if(a["birthdate"] < b["birthdate"]) {
            return -1;
          } else {
            return 0;
          }
        })

      .map(giftee => {
        const dateToFormat = '2017-10-21T07:00:00.000Z';
        return <div>{giftee.first_name} {giftee.birthdate}</div>
      })

      var day = moment("2017-10-21T07:00:00.000Z").format();
      console.log('moment', day);
      // console.log(dateToFormat.moment().format("ddd, hA"));
      // <Moment>{dateToFormat}</Moment>
    return (
      <div>
        {theupcoming}
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getGiftees: state.getGiftees,
    sortByDate: state.sortByDate
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGifteesAction: bindActionCreators(getGiftees, dispatch),
    sortByDateAction: bindActionCreators(sortByDate, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingBirthdays);
