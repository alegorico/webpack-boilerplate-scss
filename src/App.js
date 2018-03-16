
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// "use strict";
function funcionExterna(){
  return 4 * 2;

}



class App extends Component {
  constructor(props) {
    super(props);
    this.fE = funcionExterna();
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.click = this.click.bind(this);
  }

  click() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.click}>
          To get started, edit <code>src/App.js</code> and save to reload.
          Click me {this.fE}
        </p>
        <p>{this.state.isToggleOn ? 'ON' : 'OFF'}</p>
      </div>
    );
  };


};


// const App = React.Component({
//   propTypes: {
//
//   },
//   getDefaultProps() {
//     return {
//
//     };
//   },
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//           {this.fE}
//         </p>
//       </div>
//     );
//   }
// });

// console.log(App);

export default App;
