import React, { Component } from 'react';
class TestForm extends Component {

  state = {
    checkTest: false
  }

  handleTest = () => {
    console.log('entered handletest', this.state.checkTest);
    this.setState({
      checkTest: !this.state.checkTest,
    })
  }

  render () {
    return (
      <div>
        <p>
          <input
            type="checkbox"
            name="checkTest"
            checked={this.state.checkTest}
            onClick={this.handleTest}
            id="checkTest"
          />
        <label className='form-control1' htmlFor="checkTest">testform</label>
        </p>



        <div className="form-group">
          <input type="submit" className="btn btn-primary" />
        </div>
      </div>
    )
  }
}
export default TestForm;
