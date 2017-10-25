import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getOccasions } from '../actions/getOccasions';

class IconGiftee extends Component {

  // componentDidMount(){
  //   this.props.getOccasionsAction();
  //   // this.setState({ready:true})
  // }

  render () {
    let giftee = this.props.giftee;
    let occasion = this.props.getOccasions;
    console.log("occasion from icon", occasion);




    let xmas = null;
    let dreidel = null;
    let anniday = null;
    let hanukka = null;
    let mothersday = null;
    let fathersday = null;
    let valentines = null;
    let birthday = null;

    occasion = occasion.length>0 ? occasion[0] : false;

  // setTimeout(function(){

    if (occasion.birthday === true){
      birthday = <i className="fa fa-birthday-cake fa-2x" aria-hidden="true"></i>
    }

    if (occasion.xmas === true){
      xmas = <i className="fa fa-tree fa-2x" aria-hidden="true"></i>
    }

    if (occasion.valentines === true){
      valentines = <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
    }

    if (occasion.fathersday === true){
      fathersday = <img alt="father figure" className= "gifteeIcons lowerIcon" src='https://cdn2.iconfinder.com/data/icons/family-19/100/family-09-512.png'/>
    }

    if (occasion.mothersday === true){
      mothersday = <img alt="mother figure" className= "gifteeIcons lowerIcon" src='https://cdn4.iconfinder.com/data/icons/eldorado-navigation/40/mother_daughter_1-512.png'/>
    }

    if (occasion.hanukka === true){
      hanukka = <img alt="menorah" className= "gifteeIcons lowerIcon" src='https://maxcdn.icons8.com/Share/icon/Cultures//menorah1600.png'/>
    }

    if (occasion.anniday ===true){
      anniday = <img alt="engagement ring" className= "gifteeIcons lowerIcon" src='https://d30y9cdsu7xlg0.cloudfront.net/png/5164-200.png'/>
    }

    if (occasion.barmitzvah === true || giftee.bahmitzvah === true){
      dreidel = <img alt="dreidel" className= "gifteeIcons" src='https://maxcdn.icons8.com/Share/icon/ios7/Holidays//dreidel1600.png'/>
    }
// }, 2000);





    return (
      <div className="iconGroup">
          {birthday}
          {xmas}
          {valentines}
          {anniday}
          {mothersday}
          {fathersday}
          {dreidel}
          {hanukka}
      </div>
    )
  }
}


export default connect(null, null)(IconGiftee);
