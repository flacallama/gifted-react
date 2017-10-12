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
    expanded: false,
    innerExpanded: false
  }

  expansion() {
    this.setState({expanded: !this.state.expanded})
  }

  innerExpansion() {
    this.setState({expanded: !this.state.innerExpanded})
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

            <div className="row">
              <div className="col s2">
                <DeleteGiftee giftee={giftee} className=""/>
              </div>

              <div className="col s6">
                <Gifts giftee={giftee}/>
              </div>

              <div className="col s4">
                <div className="updateExpander" onClick={() => this.innerExpansion()}>
                  Add Gift Idea
                </div>

                <Collapse
                  isOpened={this.state.innerExpanded}
                >
                  <NewIdea giftee={giftee}/>
                </Collapse>

              </div>


            </div>

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
