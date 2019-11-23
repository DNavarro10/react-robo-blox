import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state ={
      monsters: [
        {
          name: 'Frank',
          id: '1'
        },
        {
          name: 'Dracula',
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        },
      ]
      
    }
  
  }
  
  
  render(){
  return (
    <div className="App">
      {this.state.monsters.map(monsters=>(
        <h1 key={monsters.id}> {monsters.name}</h1>
      ))}


    </div> 
  

  );
}
}

export default App;
