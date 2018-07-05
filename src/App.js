import React, { Component } from 'react';
import './App.css';
import CreateForm from "./components/CreateForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateForm/>
      </div>
    );
  }
}

export default App;
