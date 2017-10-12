import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addGiftee } from '../actions/getGiftees';
import AddGifteeForm  from './AddGifteeForm';
import {Collapse} from 'react-collapse';
import AnimakitExpander from 'animakit-expander';

class AddGiftee extends Component {

  state = {
    expanded: false
  }

  expansion() {
    this.setState({expanded: !this.state.expanded})
  }



  render () {
    return (
      <div>



          <div className="updateExpander" onClick={() => this.expansion()}>
            <h4>Add a new giftee</h4>
          </div>
          <div className='gifteeExpanderDetails'>
            <Collapse
              isOpened={this.state.expanded}
            >
              <AddGifteeForm />
            </Collapse>
          </div>




      </div>
    )
  }
}
//
//


function mapStateToProps(state, props){
  return {
    getGifts: state.getGifts
  }
}

function matchDispatchToProps(dispatch){
  return {
    addGifteeAction: bindActionCreators(addGiftee, dispatch),

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(AddGiftee);
