import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getOccasions} from '../actions/getOccasions';
var moment = require('moment');
var holidays = require('@date/holidays-us')
moment().format();

class UpcomingEvents extends Component {

state = {
  ready: false
}

componentWillMount(){
  this.props.getOccasionsAction();
  // this.setState({ready:true})
}


  render () {
    let ttoday = new Date();
    var ts = moment(ttoday).valueOf();
    var m = moment(ts);
    var todaysDate = m.format("MM/DD");
    var thisYearInt = m.format("YYYY");
    var mothersDate = (moment(moment(holidays.mothersDay(thisYearInt)).valueOf())).format("MM/DD");
    var fathersDate = (moment(moment(holidays.fathersDay(thisYearInt)).valueOf())).format("MM/DD")



  let eventArr = [];

  let datesArr = this.props.getOccasions;
  let curName = null;

  if(this.props.setCurId > 0){

    datesArr = this.props.getOccasions
      .filter(occasion => {
        if(this.props.setCurId == occasion.giftee_id){
          console.log('lst name', occasion.first_name)
          curName = occasion.first_name;
          return occasion;
        } else {
          return false;
        }
      })
      .map(occasion => {
        return occasion;
      })
  }
  console.log(curName, 'curName')

  let totalDdayArr = datesArr;

  let total = () => {
    let result = 0;
      for(var i = 0; i < totalDdayArr.length; i++){
        result += totalDdayArr[i].birthday_price;
        result += totalDdayArr[i].xmas_price;
        result += totalDdayArr[i].valentines_price;
        result += totalDdayArr[i].hanukka_price;
        result += totalDdayArr[i].mothersday_price;
        result += totalDdayArr[i].fathersday_price;
        result += totalDdayArr[i].anniday_price;
      }
    return result
  }

  let dateArr = datesArr
    .filter(occasion=> {
      if(occasion.birthdate){
        eventArr.push([occasion.first_name, occasion.last_name, (occasion.birthdate.substring(5, 7) + "/" + occasion.birthdate.substring(8,10)),  occasion.birthday_price, "Birthday"])
      }
      if(occasion.annidate){
        eventArr.push([occasion.first_name, occasion.last_name, (occasion.annidate.substring(5, 7) + "/" + occasion.annidate.substring(8,10)),  occasion.anniday_price, "Anniversary"])
      }
      if(occasion.xmas){
        eventArr.push([occasion.first_name, occasion.last_name, '12/25',  occasion.xmas_price, "Christmas"])
      }
      if(occasion.valentines){
        eventArr.push([occasion.first_name, occasion.last_name, '02/14',  occasion.valentines_price, "Valentines Day"])
      }
      if(occasion.mothersday){
        eventArr.push([occasion.first_name, occasion.last_name, mothersDate,  occasion.mothersday_price, "Mothers Day"])
      }
      if(occasion.fathersday){
        eventArr.push([occasion.first_name, occasion.last_name, fathersDate,  occasion.fathersday_price, "Fathers Day"])
      }
      if(occasion.hanukka){
        eventArr.push([occasion.first_name, occasion.last_name, '12/12',  occasion.hanukka_price, "Hanukka"])
      }


    })
    .map(occasion =>{
      return occasion
    })



let today = '10/03'
let dates = sorter(eventArr)

function sorter(arr){
  let resultGreater = [];
  let resultLesser = [];
  for (let i = 0; i< arr.length; i++){
    if(parseInt(arr[i][2].substring(0,2) + arr[i][2].substring(3,5)) >= parseInt(todaysDate.substring(0,2) + todaysDate.substring(3,5))){
      resultGreater.push(arr[i])
    }
  }
  for (let j = 0; j < arr.length; j++){
    if(parseInt(arr[j][2].substring(0,2) + arr[j][2].substring(3,5)) < parseInt(todaysDate.substring(0,2) + todaysDate.substring(3,5))){
      resultLesser.push(arr[j])
    }
  }
  resultGreater.sort(function(a,b){
    if(parseInt(a[2].substring(0,2) + a[2].substring(3,5)) < parseInt(b[2].substring(0,2) + b[2].substring(3,5))){
      return -1
    } else {
      return 1
    }

  })
  resultLesser.sort(function(a,b){
    if  (parseInt(a[2].substring(0,2) + a[2].substring(3,5)) < parseInt(b[2].substring(0,2) + b[2].substring(3,5))){
      return -1
    } else {
      return 1
    }
  })

  return resultGreater.concat(resultLesser)
}


  let iconAssignor = (str) => {
    if (str === "Birthday") {
      return <i className="fa fa-birthday-cake " aria-hidden="true"></i>
    }
    if (str === "Anniversary") {
      return <img alt="engagement ring" className= "smGifteeIcons lowerIcon" src='https://d30y9cdsu7xlg0.cloudfront.net/png/5164-200.png'/>
    }
    if (str === "Hanukka") {
      return     <img alt="menorah" className= "smGifteeIcons lowerIcon" src='https://maxcdn.icons8.com/Share/icon/Cultures//menorah1600.png'/>
    }
    if (str === "Mothers Day") {
      return     <img alt="mother figure" className= "smGifteeIcons lowerIcon" src='https://cdn4.iconfinder.com/data/icons/eldorado-navigation/40/mother_daughter_1-512.png'/>
    }
    if (str === "Fathers Day") {
      return <img alt="father figure" className= "smGifteeIcons lowerIcon" src='https://cdn2.iconfinder.com/data/icons/family-19/100/family-09-512.png'/>
    }
    if (str === "Valentines Day") {
      return <i className="fa fa-heart" aria-hidden="true"></i>
    }
    if (str === "Christmas") {
      return <i className="fa fa-tree" aria-hidden="true"></i>
    }



  }







    let theupcoming = dates

      .map((occasion, i) => {
        return (
          <div key={i}>
            <div className="row displayRow ">

              <div className="col s5">
                <p className='left noBottomMargin leftMargin'>{occasion[0]} {occasion[1]}</p>

              </div>
              <div className="col s3">
                <p className='left noBottomMargin leftMargin'>{occasion[3] ? "$" + occasion[3] : '' }</p>

              </div>
              <div className="col s3">
                <p className='left noBottomMargin leftMargin'>{occasion[2]}</p>

              </div>
              <div className='col s1'>
                <p className='left noBottomMargin leftMargin'>{iconAssignor(occasion[4])}</p>

              </div>
            </div>
          </div>
        )

      })






    return (
      <div className="center">
        <h4 className="upcomeHeading center">Upcoming Events {curName ? "for " + curName : ''}</h4>
        <div className="">
          <div className="row noBottomMargin" >
            <div className="col s12 noBottomMargin">
              <div className="col s5">
                <h5 className='left'>Name</h5>
              </div>
              <div className="col s3">
                <h5 className='left'>Budget</h5>
              </div>
              <div className="col s3">
                <h5 className='left'>Date</h5>
              </div>
              <div className='col s1'>
                <h5 className='left'>Occasion</h5>
              </div>

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
    getOccasions: state.getOccasions,
    setCurId: state.setCurId,
  }
}

function matchDispatchToProps(dispatch){
  return {
    getOccasionsAction: bindActionCreators(getOccasions, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingEvents);
