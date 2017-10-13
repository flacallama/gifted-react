import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';


class UpcomingHanukka extends Component {



componentWillMount(){
  this.props.getGifteesAction();
}


  render () {


    let theupcoming = this.props.getGiftees
      .filter(giftee=> {
        if(giftee.hanukka){
          return true
        }
      })
      .map(giftee => {
        return (
          <div key={giftee.id}>
            <div className="row displayRow">
              <div className="col s5">
                {giftee.first_name} {giftee.last_name}
              </div>
              <div className="col s3">
                budget: ${giftee.hanukka_price}
              </div>
              <div className="col s3">
                date: 12/12
              </div>
            </div>
          </div>
        )
      })


      let totalHanukkaArr = this.props.getGiftees
        .filter(giftee =>{
          if(giftee.hanukka === true){
            return true
          }
        })

      let total = () => {
        let result = 0;
        for(var i = 0; i< totalHanukkaArr.length; i++){
          result += totalHanukkaArr[i].hanukka_price
        }
        return result
      }


    return (
      <div className="">
        <h4 className="upcomeHeading">Hanukka</h4>
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
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingHanukka);
