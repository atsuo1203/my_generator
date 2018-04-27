import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      verb:"",
      inputText: "",
    }
  }

  handleChangeName = event =>  {
    this.setState({name: event.target.value});
  }

  handleChangeVerb = event =>  {
    this.setState({verb: event.target.value});
  }

  handleMakeWord = () => {
    var resultText = "hoge" + this.state.name + "fuga" + this.state.verb
    this.setState({inputText: resultText})
  }

  render() {
    return (
      <div className="App">
        <label>
          名詞:
        </label>
        <input type="text" name="name" onChange={this.handleChangeName} placeholder="代表戦" />
        <br/>
        <label>
          動詞:
        </label>
        <input type="text" name="verb" onChange={this.handleChangeVerb} placeholder="出ない"/>
        <br/>
        <button type="button" name="makeButton" onClick={this.handleMakeWord}>
          作成
        </button>
        <br/>
        <textarea name="kanso" rows="4" cols="40" value= {this.state.inputText} />
        <br/>
      </div>
    );
  }
}

export default App;
