import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGiftees } from '../actions/getGiftees';
import { setCurId } from '../actions/setCurId';
import ToBuyId from './ToBuyId';
import ToBuyNoId from './ToBuyNoId';

class ToBuy extends Component {


  componentWillMount(){
    this.props.getGifteesAction();
  }





  render () {
    let {getGiftees, setCurId} = this.props;

    let thegiftee = getGiftees.filter(elem => {
      if (elem.id == setCurId){
        return true;
      } else {
        return false;
      }

    })


    return (
      <div>
      <Header />
        {thegiftee[0] ? <ToBuyId /> : getGiftees ? <ToBuyNoId /> : ''}

      </div>
    )
  }
}


function mapStateToProps(state, props){
  return {
    setCurId: state.setCurId,
    getGiftees: state.getGiftees
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGifteesAction: bindActionCreators(getGiftees, dispatch),
    setCurIdAction: bindActionCreators(setCurId, dispatch)

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(ToBuy);
