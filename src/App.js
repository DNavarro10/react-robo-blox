import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       string: 'Hello world 2'
    }
  }
  


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Trying react stat</h1>
        <p>{this.state.string}</p>
        
      </header>
    </div>
  );
}
}

export default App;
