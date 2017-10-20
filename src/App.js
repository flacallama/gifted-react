import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Upcoming from './components/Upcoming';
import ToBuy from './components/ToBuy';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'





class App extends Component {
  render() {

    return (

        <Router>
          <div className='lower'>

            <Route exact path="/" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/upcoming" component={Upcoming}/>
            <Route path="/toBuy" component={ToBuy}/>

          </div>
        </Router>

    );
  }
}

export default App;
