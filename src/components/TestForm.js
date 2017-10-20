import React, { Component } from 'react';
import { Field, reduxForm, resetForm, createRecord} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class TestForm extends Component {

  addNewPost = (e) => {
    // const { resetForm } = this.props;
    // const { createRecord } = this;
    // return createRecord(e).then(n => {
    //   resetForm();
      console.log('form reset');
    // })
  }


  createRecord = (e) => {
    return setTimeout(function cb(){
      console.log('timer funct works');
      console.log('e', e);
      return {test: 1}
    }, 2000)

  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.addNewPost) }>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>

        <div>
          <label htmlFor="name">Email</label>
          <Field name="name" component="input" type="text" />
        </div>

        <div>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
            <label htmlFor="employed" className='form-control1'>Employed</label>
          </div>
        </div>


        <button type="submit">Submit</button>
      </form>
    )
  }
}

TestForm = reduxForm({
  form: 'testForm'
})(TestForm)


// function matchDispatchToProps(dispatch){
//   return {
//     formAction: bindActionCreators(formReducer, dispatch),
//
//   }
// }
export default connect(null, null)(TestForm);
