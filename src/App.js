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
    var resultText = "「お前が"+this.state.name+"を"+this.state.verb+
                     "のは勝手だ。けどそうなった場合、誰が代わりに"+this.state.name+"をすると思う？」\n"+
                     "「…」\n"+
                     "「万丈だ。」\n"
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
        <textarea name="kanso" rows="10" cols="50" value= {this.state.inputText} />
        <br/>
      </div>
    );
  }
}

export default App;
