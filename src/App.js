import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      verb:"",
      inputText: "",
      outputText:"",
    }
  }

  handleMakeWord = () => {
  }

  render() {
    return (
      <div className="App">
        <button type="button" name="makeButton" onClick={this.handleMakeWord}>
          作成
        </button>
      </div>
    );
  }
}

export default App;
