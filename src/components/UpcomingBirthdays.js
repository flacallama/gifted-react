import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';
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


  render () {
    let ttoday = new Date();
    var ts = moment(ttoday).valueOf();
    var m = moment(ts);
    var todaysDate = m.format("MM/DD");
    console.log('todaysDate', todaysDate);


  let dateArr = this.props.getGiftees
    .filter(giftee=> {
      if(giftee.birthdate){
        return true
      }
    })
    .map(giftee =>{
      return giftee
    })



console.log('dateArr', dateArr);

let today = '10/03'
let dates = sorter(dateArr)

function sorter(arr){
  let resultGreater = [];
  let resultLesser = [];
  for (let i = 0; i< arr.length; i++){
    if(parseInt((arr[i].birthdate).slice(5)) >= parseInt(todaysDate)){
      resultGreater.push(arr[i])
    }
  }
  for (let j = 0; j < arr.length; j++){
    if(parseInt((arr[j].birthdate).slice(5)) < parseInt(todaysDate) ){
      resultLesser.push(arr[j])
    }
  }
  resultGreater.sort(function(a,b){

    if  (parseInt(a.birthdate.slice(5, 7) + a.birthdate.substring(8)) < parseInt(b.birthdate.slice(5, 7) + b.birthdate.substring(8))){
      return -1
    } else {
      return 1
    }

  })
  resultLesser.sort(function(a,b){
    if  (parseInt(a.birthdate.slice(5, 7) + a.birthdate.substring(8)) < parseInt(b.birthdate.slice(5, 7) + b.birthdate.substring(8))){
      return -1
    } else {
      return 1
    }
  })

  return resultGreater.concat(resultLesser)
}









console.log("dates", dates);
    let theupcoming = dates






      // .filter(giftee=> {
      //   if(giftee.birthdate){
      //     return true
      //   }
      // })
      // .sort((a,b) => {
      //   if(a["birthdate".valueOf()] > b["birthdate".valueOf()]) {
      //     return 1;
      //     } else if(a["birthdate".valueOf()] < b["birthdate".valueOf()]) {
      //       return -1;
      //     } else {
      //       return 0;
      //     }
      //   })
      // .filter(giftee => {
      //   if(parseInt(giftee.birthdate.slice(5,10)) > parseInt(todaysDate)){
      //     return true;
      //   }
      // })
      .map(giftee => {
        return (
          <div key={giftee.id}>
            <div className="row displayRow">
              <div className="col s5">
                {giftee.first_name} {giftee.last_name}
              </div>
              <div className="col s3">
                budget: ${giftee.birthday_price}
              </div>
              <div className="col s3">
                date: {giftee.birthdate.slice(5,10)}
              </div>
            </div>
          </div>
        )

      })



      let totalDdayArr = this.props.getGiftees


      let total = () => {
        let result = 0;
        for(var i = 0; i < totalDdayArr.length; i++){
          result += totalDdayArr[i].birthday_price
        }
        return result
      }


    return (
      <div className="">
        <h4 className="upcomeHeading">Upcoming Birthdays</h4>
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
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingBirthdays);
