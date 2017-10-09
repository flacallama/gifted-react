import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGifts } from '../actions/getGifts';
import { addIdea } from '../actions/addIdea';
import Gift from './Gift'


class Gifts extends Component {

  componentWillMount() {
    console.log('component mounting');
    this.props.getGiftsAction();
  }

  render () {
    let thegifts = this.props.getGifts.map(gift => {

      return <Gift key={gift.id} gift={gift} />
    })
    return (
      <div>
        Gift Ideas:
        {thegifts}

        <form
          onSubmit={e => { this.props.addidea(
            e.target.idea.value
          )
          e.preventDefault();
          e.target.reset();
        }}
        >
          <div className="form-group">
            <input className="form-control" name="idea"/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>





        
      </div>
    )
  }
}


function mapStateToProps(state, props){
  console.log('props in mapStateToProps gifts', this.props);
  return {
    getGifts: state.getGifts
  }
}

function matchDispatchToProps(dispatch){
  return {
    getGiftsAction: bindActionCreators(getGifts, dispatch),
    addIdea: bindActionCreators(addIdea, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Gifts);
