import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteGiftee } from '../actions/getGiftees';

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

          >Delete</button>
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
    deleteGifteeAction: bindActionCreators(deleteGiftee, dispatch),

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(DeleteGiftee);
