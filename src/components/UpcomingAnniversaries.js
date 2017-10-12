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
        console.log('annidate', giftee.annidate)
        if(giftee.annidate){
          return true
        }
      })
      // .sort((a,b) => {
      //   if(a[moment().format("annidate", "MM/DD")] > b[moment().format("annidate", "MM/DD")]) {
      //     return 1;
      //   } else if(a[moment().format("annidate", "MM/DD")] < b[moment().format("annidate", "MM/DD")]) {
      //       return -1;
      //     } else {
      //       return 0;
      //     }
      //   })
      .sort((a,b) => {
        if(a["annidate".valueOf()] > b["annidate".valueOf()]) {
          return 1;
        } else if(a["annidate".valueOf()] < b["annidate".valueOf()]) {
            return -1;
          } else {
            return 0;
          }
        })
      .filter(giftee => {
        if(parseInt(giftee.annidate.slice(5,10)) >= parseInt(todaysDate)){
          return true;
        }
      })
      .map(giftee => {
        return (
          <div key={giftee.id}>
            <div className="row displayRow">
              <div className="col s3">
                {giftee.first_name} {giftee.last_name}
              </div>
              <div className="col s3">
                budget: ${giftee.anniday_price}
              </div>
              <div className="col s3">
                date: {giftee.annidate.slice(5,10)}
              </div>
            </div>
          </div>
        )
      })

      let totalAnniveraryBudget = this.props.getGiftees
        .filter(giftee =>{
          if(giftee.anniday === true && parseInt(giftee.annidate.slice(5,10)) >= parseInt(todaysDate)){
            return true
          }
        })

      let total = () => {
        let result = 0;
        for(var i = 0; i< totalAnniveraryBudget.length; i++){
          result += totalAnniveraryBudget[i].anniday_price
        }
        return result
      }

    return (
      <div className="">
        <h4 className="upcomeHeading">Anniversaries</h4>
        <div className="leftMargin">
          <div className="row noBottomMargin" >
            <div className="col s8 noBottomMargin">
              {theupcoming}
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="right rightMargin">
              <h5>${total()}</h5>
            </div>
          </div>
        </div>
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
