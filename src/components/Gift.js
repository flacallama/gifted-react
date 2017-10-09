import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteGift } from '../actions/getGifts';



class Gift extends Component {

  render () {
    let gift = this.props.gift;
    return (
      <div>
        <ul>
          <li><p>{gift.idea}</p></li>
          <button onClick={(e)=>this.props.deleteGiftAction(gift.id)}>delete</button>
          <p>{gift.idea_notes}</p>
        </ul>

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

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Gift);
