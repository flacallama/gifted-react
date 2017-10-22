import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';
import {Collapse} from 'react-collapse';
import {setCurId} from '../actions/setCurId';
import IconGiftee from './IconGiftee';
import DeleteGiftee from './DeleteGiftee';
import AddOccasionsButton from './AddOccasionsButton';
import AddOccasionsForm from './AddOccasionsForm';
import Gifts from './Gifts'
import NewIdea from './NewIdea';
import TestForm from './TestForm';
import { Route, Redirect, BrowserHistory} from 'react-router'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
// this also works with react-router-native



class Giftee extends Component {


  state = {
    expanded: false,
    innerExpanded: false
  }

  // rerouteToBuy = () => {
  //   console.log('hit redirect funct');
  //   BrowserHistory.push('/toBuy')
  // }




// example of route redirect
  // <Route exact path="/" render={() => (
  //   loggedIn ? (
  //     <Redirect to="/dashboard"/>
  //   ) : (
  //     <PublicHomePage/>
  //   )
  // )}/>











  expansion() {
    this.setState({expanded: !this.state.expanded})
  }

  innerExpansion() {
    this.setState({innerExpanded: !this.state.innerExpanded})
  }

  componentWillMount() {
    this.props.getGiftsAction();
  }

  linkClick(id){
    // let giftee = this.props.giftee;
      console.log('giftee in giftee!!!!!!!!!!!!!!!!!', this.props);
      // this.props.setCurIdAction(this.props.giftee.id)
    }

  render () {
    let giftee = this.props.giftee;
    // console.log('giftee from giftee', giftee.first_name, giftee );


    // const Button = withRouter(({ history}) => {
    //     <button
    //       type='button'
    //       onClick={() => { history.push('/toBuy') }}
    //     >
    //       Click Me!
    //     </button>
    //   })


    // console.log('giftee in giftee', giftee.id);
    return (
      <div>


        <div className="updateExpander" onClick={() => this.expansion()}>

          <div className="inline">
            <div className="inline">
              <h5 className="leftMargin">{giftee.first_name} {giftee.last_name}</h5>
            </div>

            <div className="inline rightMargin">
              {this.state.expanded ? <div><DeleteGiftee giftee={giftee} className=""/>  </div>: ''}
            </div>
          </div>

          <div className='inline right rightMargin topMargin'>
            <IconGiftee giftee={giftee} />
          </div>

        </div>


        <div className='gifteeExpanderDetails'>

          <Collapse isOpened={this.state.expanded}>

            <div className="row">

              <div className="col s4">
                <Link onClick={() => this.props.setCurIdAction(giftee.id)} className='linkButton' to="/toBuy">To Buy</Link>
              </div>

              <div className="col s3">
                <TestForm giftee={giftee}/>
              </div>

              <div className="col s1">
                <Gifts giftee={giftee}/>
              </div>

              <div className="col s3">
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
    getGifts: state.getGifts
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGiftsAction: bindActionCreators(getGifts, dispatch),
    setCurIdAction: bindActionCreators(setCurId, dispatch)

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Giftee);
