import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class TestForm extends Component {

  addNewPost = (val) => {
    console.log(val)
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.addNewPost) }>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

TestForm = reduxForm({
  // a unique name for the form
  form: 'testFormm'
})(TestForm)


export default TestForm;
