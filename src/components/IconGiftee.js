import React, { Component } from 'react';
import { connect } from 'react-redux';


class IconGiftee extends Component {

  render () {
    let giftee = this.props.giftee

    let birthday = null;
    if (giftee.birthday === true){
      birthday = <i className="fa fa-birthday-cake" aria-hidden="true"></i>
    }

    let xmas = null;
    if (giftee.xmas === true){
      xmas = <i className="fa fa-tree" aria-hidden="true"></i>
    }

    let valentines = null;
    if (giftee.valentines === true){
      valentines = <i className="fa fa-heart" aria-hidden="true"></i>
    }

    let fathersday = null;
    if (giftee.fathersday === true){
      fathersday = <img alt="father figure" className= "gifteeIcons lowerIcon" src='https://cdn2.iconfinder.com/data/icons/family-19/100/family-09-512.png'/>
    }

    let mothersday = null;
    if (giftee.mothersday === true){
      mothersday = <img alt="mother figure" className= "gifteeIcons lowerIcon" src='https://cdn4.iconfinder.com/data/icons/eldorado-navigation/40/mother_daughter_1-512.png'/>
    }

    let hanukka = null;
    if (giftee.hanukka === true){
      hanukka = <img alt="menorah" className= "gifteeIcons lowerIcon" src='https://maxcdn.icons8.com/Share/icon/Cultures//menorah1600.png'/>
    }

    let anniday = null;
    if (giftee.anniday ===true){
      anniday = <img alt="engagement ring" className= "gifteeIcons lowerIcon" src='https://d30y9cdsu7xlg0.cloudfront.net/png/5164-200.png'/>
    }

    let dreidel = null;
    if (giftee.barmitzvah === true || giftee.bahmitzvah === true){
      dreidel = <img alt="dreidel" className= "gifteeIcons" src='https://maxcdn.icons8.com/Share/icon/ios7/Holidays//dreidel1600.png'/>
    }





    // <i className="fa fa-gift" aria-hidden="true"></i>



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

        // <img className= "gifteeIcons" src='https://d30y9cdsu7xlg0.cloudfront.net/png/75158-200.png'/>

// function mapStateToProps(state, props){
//
// }

export default connect(null, null)(IconGiftee);
