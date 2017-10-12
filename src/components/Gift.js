import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import UpdateIdea from './UpdateIdea';
import {Collapse} from 'react-collapse';



class Gift extends Component {
  state = {
    expanded: false
  }


  expansion() {
    this.setState({expanded: !this.state.expanded})
  }
  render () {


    let gift = this.props.gift;

    return (
      <div className="container">
        <div className="inline" onClick={() => this.expansion()}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
        <span className="giftIdeaTitle">{gift.idea}</span>
        <span className="giftIdeaNotes">{gift.idea_notes}</span>
        <div>
          <Collapse
            isOpened={this.state.expanded}
            >
            <UpdateIdea giftee={this.props.giftee} gift={gift}/>
          </Collapse>
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

// function matchDispatchToProps(dispatch){
//   return {
//
//
//   }
// }
export default connect(mapStateToProps, null)(Gift);
