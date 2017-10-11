import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';

class DeleteGiftee extends Component {



  render () {
    let giftee = this.props.giftee;
    return (
      <div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={e => this.props.deleteGifteeAction(giftee.id)}
          >delete</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state, props){
  return {
    getGifts: state.getGifts
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGiftsAction: bindActionCreators(getGifts, dispatch),

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(DeleteGiftee);
