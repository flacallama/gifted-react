import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';
import {Collapse} from 'react-collapse';
import {setCurId} from '../actions/setCurId';
import IconGiftee from './IconGiftee';
import DeleteGiftee from './DeleteGiftee';
// import AddOccasionsButton from './AddOccasionsButton';
// import AddOccasionsForm from './AddOccasionsForm';
import Gifts from './Gifts'
import NewIdea from './NewIdea';
// import { Redirect, BrowserHistory} from 'react-router'
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import { getOccasions } from '../actions/getOccasions';
// this also works with react-router-native



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

  componentDidMount(){
    this.props.getOccasionsAction();
    // this.setState({ready:true})
  }


  render () {
    let giftee = this.props.giftee;

    console.log('getOccasions', this.props.getOccasions);

    let occasion = this.props.getOccasions
      .filter(elem =>{
        // console.log('compare in giftee', giftee.id, elem.giftee_id);
        if(giftee.id === elem.giftee_id){
          console.log('true', giftee.first_name, giftee.id, elem.giftee_id);
          return true;
        } else {
          console.log('false', giftee.first_name, giftee.id, elem.giftee_id);
          return false;
        }

      })
      // .map(elem =>{
      //   return elem;
      // })

    console.log('occasion props from giftee', giftee.first_name, occasion);









    return (
      <div>
        <div className="updateExpander giftee z-depth-1 row" onClick={() => this.expansion()}>


          <div className="col s6">
            <h5 className="leftMargin">{giftee.first_name} {giftee.last_name}</h5>
          </div>

          <div className="col s3">
            {this.state.expanded ? <div className="right"><DeleteGiftee giftee={giftee} className=""/>  </div>: ''}
          </div>


          <div className='col s3'>
            {occasion ? <IconGiftee getOccasions={occasion} giftee={giftee} /> : 'nope'}

          </div>

        </div>

        <div className='gifteeExpanderDetails'>

          <Collapse isOpened={this.state.expanded}>

            <div className="row">

              <div className="col s2">
                <Link onClick={() => this.props.setCurIdAction(giftee.id)} className='waves-effect waves-light btn-large' to="/toBuy">Occasions</Link>
              </div>



              <div className="col s5">
                <Gifts giftee={giftee}/>
              </div>

              <div className="col s5">
                <div className='inline left'>

                  <Collapse isOpened={this.state.innerExpanded}>
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
    getOccasions: state.getOccasions,
    getGifts: state.getGifts
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGiftsAction: bindActionCreators(getGifts, dispatch),
    setCurIdAction: bindActionCreators(setCurId, dispatch),
    getOccasionsAction: bindActionCreators(getOccasions, dispatch)

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Giftee);
