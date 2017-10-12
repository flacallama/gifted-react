import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateIdea } from '../actions/getGifts';
import { deleteGift } from '../actions/getGifts';

class UpdateIdea extends Component {

  render () {
    return (
      <div className="updateIdea">
        <form
          onSubmit={e => { this.props.updateIdeaAction(this.props.gift.id,
            e.target.idea.value, e.target.notes.value,
            e.target.past.value

          )
          console.log('beforesubmit arguments', this.props.gift.id, this.props.gift.idea, this.props.gift.idea_notes, this.props.gift.is_past);
          console.log('onsubmit arguments', this.props.giftee.id,
            e.target.idea.value, e.target.notes.value,
            e.target.past.value)
          e.preventDefault();
          e.target.reset();
        }}
        >
          <div className="form-group">
            <input className="form-control" name="idea" placeholder="Update Idea"/>
            <input className="form-control" name="notes" placeholder="Notes"/>
            <select name='past'>
              <option value='false'>Future</option>
              <option value='true'>Past</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
        <button onClick={(e)=>this.props.deleteGiftAction(this.props.gift.id)}>delete</button>
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
    deleteGiftAction: bindActionCreators(deleteGift, dispatch),
    updateIdeaAction: bindActionCreators(updateIdea, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(UpdateIdea);
