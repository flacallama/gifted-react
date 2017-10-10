import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
// import Moment from 'moment';

// var moment = require('moment');
// require("moment/min/locales.min");
// moment.locale('cs');
// console.log(moment.locale()); // cs


class Calendar extends Component {

  state = {
    selectedBDay: ''
  }

  selectBDay(date){
    let strDate = date/*.toString().slice(3,10)*/
    this.setState({
      selectedBDay: strDate
    })
  }

  clearBDay(){
    this.setState({
      selectedBDay: ''
    })
  }


render () {
  console.log(this.state.selectedBDay);
  // Render the Calendar
  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

  return (

      <InfiniteCalendar
        onSelect={date => this.selectBDay(date)}
        displayOptions={{
          showHeader: false
        }}
        width={400}
        height={400}
        selected={today}

      />
    )

  }

}
export default Calendar
