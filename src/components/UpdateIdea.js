import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateIdea } from '../actions/getGifts';

class UpdateIdea extends Component {

  render () {
    return (
      <div>
        <form
          onSubmit={e => { this.props.updateIdeaAction(this.props.giftee.id,
            e.target.idea.value, e.target.notes.value
          )
          e.preventDefault();
          e.target.reset();
        }}
        >
          <div className="form-group">
            <input className="form-control" name="idea" placeholder="Update Idea"/>
            <input className="form-control" name="notes" placeholder="Notes"/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>

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
    updateIdeaAction: bindActionCreators(updateIdea, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(UpdateIdea);
