import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addGiftee } from '../actions/getGiftees';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';


class AddGifteeForm extends Component {

  state = {
    first: null,
    last: null,
    relationship: null,
    email: null,
    age: null
  }



  resetState = () => {
    this.setState({
      first: null,
      last: null,
      relationship: null,
      email: null,
      age: null
    })
  }




  render () {

    return (
      <div className="row">
        <form
          onSubmit={e => { this.props.addGifteeAction(
            this.state.first,
            this.state.last,
            this.state.relationship,
            this.state.email,
            this.state.age
          )
          e.preventDefault();
          this.resetState();
          e.target.reset();
        }}

        >
          <div className="col s4">
            <input className="form-control" name="first" placeholder="First Name" onChange={e => this.setState({first: e.target.value})}/>
            <input className="form-control" name="last" placeholder="Last Name" onChange={e => this.setState({last: e.target.value})}/>
            <input className="form-control" name="relationship" placeholder="Relationship" onChange={e => this.setState({relationship: e.target.value})}/>
            <input className="form-control" name="email" placeholder="email" onChange={e => this.setState({email: e.target.value})}/>
            <input className="form-control" type="number" name="age" placeholder="Age" onChange={e => this.setState({age: e.target.value})}/>
          </div>
          
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>


      </div>
    )
  }
}


// function mapStateToProps(state, props){
//   return {
//     getGifts: state.getGifts
//   }
// }

function matchDispatchToProps(dispatch){
  return {
    addGifteeAction: bindActionCreators(addGiftee, dispatch),

  }
}
export default connect(null, matchDispatchToProps)(AddGifteeForm);
