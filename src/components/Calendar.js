import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import Moment from 'react-moment';


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

  // Render the Calendar
  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  const dateToFormat = '1976-04-19T12:59-0500';

  return (
    <div>
      <Moment>{dateToFormat}</Moment>
      <InfiniteCalendar
        onSelect={date => this.selectBDay(date)}
        displayOptions={{
          showHeader: false
        }}
        width={200}
        height={200}
        selected={today}

        />
    </div>
    )

  }

}
export default Calendar
