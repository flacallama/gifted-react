import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';
import {Collapse} from 'react-collapse';
import IconGiftee from './IconGiftee';
import DeleteGiftee from './DeleteGiftee';
import Gifts from './Gifts'
import NewIdea from './NewIdea';



class Giftee extends Component {


  state = {
    expanded: false
  }

  expansion() {
    this.setState({expanded: !this.state.expanded})
  }

  componentWillMount() {
    this.props.getGiftsAction();
  }

  render () {
    let giftee = this.props.giftee;
    return (
      <div>


        <div className="updateExpander" onClick={() => this.expansion()}>

          <div className="inline">
            <p>{giftee.first_name} {giftee.last_name}</p>

          </div>
          <div className='inline'><IconGiftee giftee={giftee} /></div>

        </div>
        <div className='gifteeExpanderDetails'>
          <Collapse
            isOpened={this.state.expanded}
          >
            <DeleteGiftee giftee={giftee} className="right"/>

            <Gifts giftee={giftee}/>
            <NewIdea giftee={giftee}/>
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

function matchDispatchToProps(dispatch){
  return {
    getGiftsAction: bindActionCreators(getGifts, dispatch),

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Giftee);
