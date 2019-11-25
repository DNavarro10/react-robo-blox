import React, {Component} from 'react';

import { CardList} from './components/card-list/card-list.component';

import './App.css';
import { from } from 'rxjs';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = { 
      monsters: []
    };
  }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( users => this.setState({ monsters: users}));
    }

  render(){
  return (
    <div className="App">
      <CardList name="Usando el props">
      <h1>Children Diego</h1>
      </CardList>
      {this.state.monsters.map(monsters=>(
        <h1 key={monsters.id}> {monsters.name}</h1>
      ))}


    </div> 
  

  );
}
}

export default App;
