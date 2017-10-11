import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';
import AnimakitExpander from 'animakit-expander';
import IconGiftee from './IconGiftee';
import DeleteGiftee from './DeleteGiftee';
import Gifts from './Gifts'
import NewIdea from './NewIdea';
import Moment from 'react-moment';


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

        </div>
        <div className='gifteeExpanderDetails'>

          <AnimakitExpander
            expanded={this.state.expanded}
            horizontal
            align="right"
            >

            <DeleteGiftee giftee={giftee}/>
            <IconGiftee giftee={giftee} />
            <Gifts giftee={giftee}/>
            <NewIdea giftee={giftee}/>
          </AnimakitExpander>
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
