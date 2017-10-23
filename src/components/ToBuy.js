import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGiftees } from '../actions/getGiftees';
import { setCurId } from '../actions/setCurId';
import ToBuyId from './ToBuyId';
import ToBuyNoIdGiftee from './ToBuyNoIdGiftee';
import ToBuyNoId from './ToBuyNoId';


class ToBuy extends Component {


  componentWillMount(){
    this.props.getGifteesAction();
  }

  componentDidMount() {
    setTimeout(function(){
      // console.log('tobuy mounted');
      return true;
    }, 1000)

   }

  test = () => {
    setTimeout(function(){
      return true;
    }, 1000)
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

    // let theGiftees = false;
    // if (getGiftees){
      // console.log('get giftees', getGiftees);
      let theGiftees = getGiftees
        .filter(giftee =>{
          if(giftee.id < 1000){
            return true;
          }
        })

        .map(giftee => {
          // console.log('gifteeee', giftee.first_name);
          <p>giftee.first_name</p>
          // <ToBuyNoIdGiftee key={giftee.id} giftee={giftee} />
        })

    return (
      <div>
      <Header />
        {thegiftee[0] ? <ToBuyId /> : <ToBuyNoId />}

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
