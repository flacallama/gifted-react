import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';
import { addIdea } from '../actions/getGifts';
import Gifts from './Gifts'

class Giftee extends Component {

  componentWillMount() {
    this.props.getGiftsAction();
  }

  render () {
    let giftee = this.props.giftee;
    return (
      <div>
        {giftee.first_name} {giftee.last_name}
        <Gifts />

        <form
          onSubmit={e => { this.props.addIdeaAction(this.props.giftee.id,
            e.target.idea.value
          )
          e.preventDefault();
          e.target.reset();
        }}
        >
          <div className="form-group">
            <input className="form-control" name="idea"/>
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
    getGiftsAction: bindActionCreators(getGifts, dispatch),
    addIdeaAction: bindActionCreators(addIdea, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Giftee);
