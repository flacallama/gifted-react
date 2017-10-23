import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurId } from '../actions/setCurId';

class ToBuyNoIdGiftee extends Component {


  handleClick = (e) => {
    this.props.setCurIdAction(this.props.giftee.id)
  }

  render () {
    console.log('props', this.props);
    let {giftee} = this.props;
    return (
      <div className="container" >
        <div className="row " onClick={this.handleClick}>
          <div className="card grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{giftee.first_name} {giftee.last_name}</span>
              <p>{giftee.relationship}</p>
            </div>
            <div className="card-action" onClick=''>
              <a href="#">Upcoming events for {giftee.first_name}</a>
            </div>
          </div>
        </div>
      </div>





    )
  }
}
function matchDispatchToProps(dispatch){
  return {
    // getGifteesAction: bindActionCreators(getGiftees, dispatch),
    setCurIdAction: bindActionCreators(setCurId, dispatch),
    
  }
}
export default connect(null, matchDispatchToProps)(ToBuyNoIdGiftee);
