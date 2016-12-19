import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

const App = ({txt, age}) => <div>
    <h1>{txt}</h1><p>Age: {age}</p></div>;

App.propTypes = {
    txt: React.PropTypes.string,
    age: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: "default text, overridden by props"
}

// class App extends Component {    
//   render() {
    //let txt = this.props.txt;
//     return (
//       <div className="App">{txt}
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
