import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleAddOccasions } from '../actions/toggleAddOccasions';

class AddOccasionsButton extends Component {



  render () {
    let giftee = this.props.giftee;
    return (
      <div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={e => this.props.toggleAddOccasionsAction()}

          >Add Occasions</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state, props){
  return {
    toggleAddOccasions: state.toggleAddOccasions
  }
}

function matchDispatchToProps(dispatch){
  return {
    toggleAddOccasionsAction: bindActionCreators(toggleAddOccasions, dispatch),

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(AddOccasionsButton);
