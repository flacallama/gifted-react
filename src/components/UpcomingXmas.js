import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getGiftees} from '../actions/getGiftees';


class UpcomingXmas extends Component {



componentWillMount(){
  this.props.getGifteesAction();
}


  render () {


    let theupcoming = this.props.getGiftees
      .filter(giftee=> {
        if(giftee.xmas){
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
                budget: ${giftee.xmas_price}
              </div>
              <div className="col s3">
                date: 12/25
              </div>
            </div>
          </div>
        )
      })


      let totalXmasArr = this.props.getGiftees
        .filter(giftee =>{
          if(giftee.xmas === true){
            return true
          }
        })

      let total = () => {
        let result = 0;
        for(var i = 0; i< totalXmasArr.length; i++){
          result += totalXmasArr[i].xmas_price
        }
        return result
      }


    return (
      <div className="">
        <h4 className="upcomeHeading">Christmas</h4>
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
export default connect(mapStateToProps, matchDispatchToProps)(UpcomingXmas);
