import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';
import UpcomingBirthday from './UpcomingBirthday';
import Moment from "react-moment";

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
    let theupcoming = this.props.getGiftees
      .filter(giftee=> {
        if(giftee.birthdate){
          return true
        }
      })
    //   .sort((a,b) => {
    // if(a[this.props.getGiftees.birthdate] > b[this.props.getGiftees.birthdate]) {
    //   return 1;
    //   } else if(a[this.props.getGiftees.birthdate] < b[this.props.getGiftees.birthdate]) {
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    //   })
      .map(giftee => {
        const dateToFormat = '2017-10-21T07:00:00.000Z';
        return <div>{giftee.first_name} <Moment>{dateToFormat} </Moment></div>
      })

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
    getGiftees: state.getGiftees
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGifteesAction: bindActionCreators(getGiftees, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingBirthdays);
