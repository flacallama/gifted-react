import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurId } from '../actions/setCurId';
import { Link } from 'react-router-dom';

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
          <div className=" ">
            <div className="">
              <div className="noBottomMargin">
                <div className="col s7 noIdCard z-depth-1">
                  <div className="container">
                    <span className="noBottomMargin heading">{giftee.first_name} {giftee.last_name}</span>
                    <p className="noBottomMargin noTopMargin">{giftee.relationship}</p>
                  </div>
                </div>
              <div className="">
              </div>
              </div>
            </div>
          </div>
          <div className="verticalAlignMiddle col s5">
            <Link onClick={() => this.props.setCurIdAction(giftee.id)} className='waves-effect waves-light btn-large right z-zero' to="/upcoming">{giftee.first_name}&#39;s events</Link>
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
