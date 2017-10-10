import React, { Component } from 'react';
import { connect } from 'react-redux';


class IconGiftee extends Component {

  render () {
    let giftee = this.props.giftee





    // <i className="fa fa-gift" aria-hidden="true"></i>



    return (
      <div>
        {giftee.birthday ? <i className="fa fa-birthday-cake" aria-hidden="true"></i> : ''}

        {giftee.xmas ? <i className="fa fa-tree" aria-hidden="true"></i> : ''}

        {giftee.valentines ? <i className="fa fa-heart" aria-hidden="true"></i> : ''}

        {giftee.anniday ? <img alt="engagement ring" className= "gifteeIcons" src='https://d30y9cdsu7xlg0.cloudfront.net/png/5164-200.png'/> : ''  }


        {giftee.mothersday ? <img alt="mother figure" className= "gifteeIcons" src='https://cdn4.iconfinder.com/data/icons/eldorado-navigation/40/mother_daughter_1-512.png'/> : ''}


        {giftee.fathersday ? <img alt="father figure" className= "gifteeIcons" src='https://cdn2.iconfinder.com/data/icons/family-19/100/family-09-512.png'/> : ''}




        {giftee.barmitzvah || giftee.bahmitvah ? <img alt="dreidel" className= "gifteeIcons" src='https://maxcdn.icons8.com/Share/icon/ios7/Holidays//dreidel1600.png'/> : ''}

        {giftee.hannuka ? <img alt="menorah" className= "gifteeIcons" src='https://maxcdn.icons8.com/Share/icon/Cultures//menorah1600.png'/> : ''}


      </div>
    )
  }
}

        // <img className= "gifteeIcons" src='https://d30y9cdsu7xlg0.cloudfront.net/png/75158-200.png'/>

function mapStateToProps(state, props){

}

export default connect(mapStateToProps, null)(IconGiftee);
