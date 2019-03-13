import React, { Component } from 'react';
import InputForm from './components/inputform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>PigLatinizer</h1>
          <h2>Let's translate english to pig latin!</h2>
        </header>
        <InputForm />
      </div>
    );
  }
}

export default App;
