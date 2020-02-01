import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {C1,C2}  from './C1/C1';


class App extends Component{

  state = {
    persons :[
      {name: "Susanta",age: 16},
      {name: "Ambarish Da",age: 15},
      {name: "Sudipto",age: 14}
    ],
    otherstate : "Hi how are you!!"
  };

  clickHandler = () => {
    this.setState({
      persons :[
        {name: "Susantaaaa",age: 16},
        {name: "Ambarish Da",age: 15},
        {name: "Sudipto777",age: 14}
      ]
    })
  }

  render () {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <C1 />
            <C2 country="India" state="WB"/>
            <C2 country="UK" state="London">"Hi! I am in London"</C2>
            <button onClick={this.clickHandler}>Click</button>
            <C2 name={this.state.persons[0].name} age={this.state.persons[1].age} />
            <C2 name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <C2 name={this.state.persons[2].name} age={this.state.persons[2].age} />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
  
}

export default App;
