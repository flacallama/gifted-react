import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGiftees } from '../actions/getGiftees';
import { setCurId } from '../actions/setCurId';
import AddOccasionsForm from './AddOccasionsForm';


class ToBuyId extends Component {


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
        <h2></h2>



          <div className="row">
            <div className="col s12 m8">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{thegiftee[0].first_name} {thegiftee[0].last_name}</span>
                  
                    <p>{thegiftee[0].created_at.slice(0,10)}</p>
                    <p>{thegiftee[0].relationship}</p>
                    <p>{thegiftee[0].email}</p>
                </div>
                <div className="card-action white-text">
                  <AddOccasionsForm giftee={thegiftee}/>
                </div>
              </div>
            </div>
          </div>



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
export default connect(mapStateToProps, matchDispatchToProps)(ToBuyId);
