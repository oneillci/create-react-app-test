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
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt} - {this.state.age}</h1>
      </div>
    );
  }
}

export default App;
