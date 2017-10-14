import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getOccasions} from '../actions/getOccasions';
var moment = require('moment');
moment().format();

class UpcomingEvents extends Component {

state = {
  ready: false
}

componentWillMount(){
  this.props.getOccasionsAction();
  this.setState({ready:true})
}


  render () {
    let ttoday = new Date();
    var ts = moment(ttoday).valueOf();
    var m = moment(ts);
    var todaysDate = m.format("MM/DD");
    console.log('todaysDate', todaysDate);

  let eventArr = [];
  let dateArr = this.props.getOccasions
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

    })
    .map(occasion =>{
      return occasion
    })

    console.log('eventArr', eventArr);


console.log('dateArr', dateArr);

let today = '10/03'
let dates = sorter(eventArr)

function sorter(arr){
  let resultGreater = [];
  let resultLesser = [];
  for (let i = 0; i< arr.length; i++){
    if(parseInt(arr[i][2].substring(0,2) + arr[i][2].substring(3,5)) >= parseInt(todaysDate.substring(0,2) + todaysDate.substring(3,5))){
      console.log("that shits parsing and grouping greater");
      resultGreater.push(arr[i])
    }
  }
  for (let j = 0; j < arr.length; j++){
    if(parseInt(arr[j][2].substring(0,2) + arr[j][2].substring(3,5)) < parseInt(todaysDate.substring(0,2) + todaysDate.substring(3,5))){
      console.log("that shits parsing and grouping lesser");
      resultLesser.push(arr[j])
    }
  }
  resultGreater.sort(function(a,b){
    if(parseInt(a[2].substring(0,2) + a[2].substring(3,5)) < parseInt(b[2].substring(0,2) + b[2].substring(3,5))){
      console.log("that shits parsing and sorting -1 greater");
      return -1
    } else {
      console.log("that shits parsing and sorting 1 greater");
      return 1
    }

  })
  resultLesser.sort(function(a,b){
    if  (parseInt(a[2].substring(0,2) + a[2].substring(3,5)) < parseInt(b[2].substring(0,2) + b[2].substring(3,5))){
      console.log("that shits parsing and sorting -1 lesser");
      return -1
    } else {
      console.log("that shits parsing and sorting -1 lesser");
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
            <div className="row displayRow">

              <div className="col s5">
                {occasion[0]} {occasion[1]}
              </div>
              <div className="col s3">
                budget: ${occasion[3]}
              </div>
              <div className="col s3">
                date: {occasion[2]}
              </div>
              <div className='col s1'>
                {iconAssignor(occasion[4])}
              </div>
            </div>
          </div>
        )

      })



      let totalDdayArr = this.props.getOccasions


      let total = () => {
        let result = 0;
        for(var i = 0; i < totalDdayArr.length; i++){
          result += totalDdayArr[i].birthday_price
        }
        return result
      }


    return (
      <div className="">
        <h4 className="upcomeHeading">Upcoming Events</h4>
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
    getOccasions: state.getOccasions,
  }
}

function matchDispatchToProps(dispatch){
  return {
    getOccasionsAction: bindActionCreators(getOccasions, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingEvents);
