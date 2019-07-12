import React, { Component } from 'react';
import CustomComponents from './Component/index';
import './App.css';

const getComponent = code => {
  const Component = CustomComponents[code]
  return <Component />
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          {
            CustomComponents.map((value, key) => {
              return <li>{key}</li>
            })
          }
      </ul>
      </div>
    );
  }
}

export default App;
