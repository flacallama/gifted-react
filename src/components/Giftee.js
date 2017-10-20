import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';
import {Collapse} from 'react-collapse';
import IconGiftee from './IconGiftee';
import DeleteGiftee from './DeleteGiftee';
import AddOccasionsButton from './AddOccasionsButton';
import AddOccasionsForm from './AddOccasionsForm';
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
    this.setState({innerExpanded: !this.state.innerExpanded})
  }

  componentWillMount() {
    this.props.getGiftsAction();
  }

  render () {
    let giftee = this.props.giftee;
    console.log('giftee from giftee', giftee.first_name, giftee );
    return (
      <div>


        <div className="updateExpander" onClick={() => this.expansion()}>

          <div className="inline">
            <div className="inline">
              <h5 className="leftMargin">{giftee.first_name} {giftee.last_name}</h5>
            </div>

            <div className="inline leftMargin">
              {this.state.expanded ? <div><DeleteGiftee giftee={giftee} className=""/>  </div>: ''}
            </div>
          </div>
          <div className='inline right rightMargin topMargin'><IconGiftee giftee={giftee} /></div>

        </div>
        <div className='gifteeExpanderDetails'>
          <Collapse
            isOpened={this.state.expanded}
          >

            <div className="row">
              <div className="col s6">
                <AddOccasionsForm giftee={giftee}/>
              </div>

              <div className="col s4">
                <Gifts giftee={giftee}/>
              </div>
              <div className="col s2">
                <div className='inline left'>
                  <Collapse
                    isOpened={this.state.innerExpanded}
                  >
                    <NewIdea giftee={giftee}/>
                  </Collapse>
                </div>
                <div className="right rightMargin inline" onClick={() => this.innerExpansion()}>
                  {!this.state.innerExpanded ? <h4><i className="fa fa-plus inline" aria-hidden="true"></i></h4> : <h4><i className="fa fa-minus inline" aria-hidden="true"></i></h4>}
                </div>



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
