import React, { Component } from 'react';
import './App.css';
import './animate.css';
// eslint-disable-next-line 
import About from './components/about';
import Animate from './components/animation';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Animate/>
        
        
        <div className="behind">
        <About/>
        </div>
        
      </div>
    );
  }
}

export default App;
