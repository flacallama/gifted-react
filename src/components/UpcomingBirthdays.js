import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';
import UpcomingBirthday from './UpcomingBirthday';


class UpcomingBirthdays extends Component {

componentWillMount(){
  this.props.getGifteesAction();

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
    // let upcomingevents = this.props.getGiftees ? <div>{ this.props.giftees.map(giftee =>
    //   {<span key={giftee.id}> {giftee.name} </span> }) </div> : <div> Loading ... </div>
    //
    // }

    console.log('the giftees', this.props.getGiftees);

    // let theupcoming = this.props.getGiftees.filter(giftee=> {
    //   if(1==1){
    //     return <UpcomingBirthday key={giftee.id} giftee={giftee} />
    //   }
    // })

    return (
      <div>

        {this.props.getGiftees.length > 0 &&
          <h2>
            You have unread messages. {this.props.getGiftees.filter(giftee => {
              if(giftee.id){

                return <UpcomingBirthday key={giftee.id} giftee={giftee} />
              }
            })}
          </h2>
}



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
