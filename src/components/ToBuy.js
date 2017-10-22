import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGiftees } from '../actions/getGiftees';
import { setCurId } from '../actions/setCurId';
import ToBuyId from './ToBuyId';

class ToBuy extends Component {


  componentWillMount(){
    this.props.getGifteesAction();
  }





  render () {
    let {getGiftees, setCurId} = this.props;
    console.log('this.props', this.props);
    console.log(getGiftees, 'setCurId', this.props.setCurId);

    let thegiftee = getGiftees.filter(elem => {
      console.log('elem', elem);
      if (elem.id == setCurId){
        console.log('filter true');
        return true;
      } else {
        console.log('filterfalse');
        return false;
      }

    })






    console.log('the giftee', thegiftee);

    return (
      <div>
      <Header />
        {thegiftee[0] ? <ToBuyId /> : <h2>notyet</h2>}

        <p>id: {this.props.setCurId}</p>

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