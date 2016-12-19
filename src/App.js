import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

// const App = ({txt, age}) => <div>
//     <h1>{txt}</h1><p>Age: {age}</p></div>;

// App.propTypes = {
//     txt: React.PropTypes.string,
//     age: React.PropTypes.number.isRequired
// };

// App.defaultProps = {
//     txt: "default text, overridden by props"
// }

class App extends Component {    
  constructor() {
    super();
    this.state = { 
      txt: "txt in state",
      age: 36
    }
  }
  
  update (e) {
    this.setState({txt: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.txt} - {this.state.age}</h1>
        <Button>This is the children slot - <Heart /></Button>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
      </div>
    );
  }
}

const Widget = (props) => <input type="text" onChange={props.update} />;

const Button = props => <button>{props.children}</button>;
const Heart = () => <span>&hearts;</span>

App.propTypes = {    
    age (props, propName, component) {
      if (!(propName in props)) return new Error(`missing ${propName}`);
      if (props["age"] < 18) return new Error(`age must be > 18, ${props['age']} supplied`);
    }
};

export default App;
