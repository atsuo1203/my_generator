import React, { Component } from 'react';

class BanjoFull extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      verbA:"",
      verbB:"",
      verbC:"",
      verbD:"",
      verbE:"",
      verbF:"",
      humanA:"",
      humanB:"",
      banjo:"",
      enemy:"",
      organization:"",
      humanC:"",
      inputText: "惣一「お前が代表戦に出ないのは勝手だ。けどそうなった場合、誰が代わりに出ると思う？」\n"+
                 "戦兎「…」\n"+
                 "惣一「万丈だ。万丈は今回の件で、お前に負い目を感じているはずだ。\n"+
　　　            "     だからお前がやらなきゃ、自分から手を挙げるだろう。\n"+
　　　            "     けど、今のあいつじゃグリスには勝てない。\n"+
　　　            "     そうなれば、東都の連中はよってたかってクローズを責める。\n"+
　　　            "     お前が戦うしかないんだよ。」"
    }
  }

  handleChangeName = event => {
    this.setState({name: event.target.value})
  }
  handleChangeVerbA = event => {
    this.setState({verbA: event.target.value})
  }
  handleChangeVerbB = event => {
    this.setState({verbB: event.target.value})
  }
  handleChangeVerbC = event => {
    this.setState({verbC: event.target.value})
  }
  handleChangeVerbD = event => {
    this.setState({verbD: event.target.value})
  }
  handleChangeVerbE = event => {
    this.setState({verbE: event.target.value})
  }
  handleChangeVerbF = event => {
    this.setState({verbF: event.target.value})
  }
  handleChangeHumanA = event => {
    this.setState({humanA: event.target.value})
  }
  handleChangeHumanB = event => {
    this.setState({humanB: event.target.value})
  }
  handleChangeBanjo = event => {
    this.setState({banjo: event.target.value})
  }
  handleChangeEnemy = event => {
    this.setState({enemy: event.target.value})
  }
  handleChangeOrganization = event => {
    this.setState({organization: event.target.value})
  }
  handleChangeHumanC = event => {
    this.setState({humanC: event.target.value})
  }

  handleMakeWord = () => {
    var resultText = this.state.humanA+"「お前が"+this.state.name+"に"+this.state.verbA+"のは勝手だ。"+
                          "けどそうなった場合、誰が代わりに"+this.state.verbB+"と思う？」\n"+
                     this.state.humanB+"「…」\n"+
                     this.state.humanA+"「"+this.state.banjo+"だ。"+this.state.banjo+
                     "は今回の件で、お前に負い目を感じているはずだ。\n"+
                     "だからお前がやらなきゃ、自分から"+this.state.verbC+"だろう。\n"+
                     "けど、今のあいつじゃ"+this.state.enemy+"には"+this.state.verbD+"。\n"+
                     "そうなれば、"+this.state.organization+"の連中はよってたかって"+this.state.humanC+
                     "を"+this.state.verbE+"。\n"+
                     "お前が"+this.state.verbF+"しかないんだよ。」"
    this.setState({inputText: resultText})
  }

  render() {
    return (
      <div className="BanjoFull">
        <h2>フルバージョン</h2>
        <label>
          人物A:
        </label>
        <input type="text" name="humanA" onChange={this.handleChangeHumanA} placeholder="惣一" />
        <br/>
        <label>
          人物B:
        </label>
        <input type="text" name="humanB" onChange={this.handleChangeHumanB} placeholder="戦兎" />
        <br/>
        <label>
          人物C:
        </label>
        <input type="text" name="humanC" onChange={this.handleChangeHumanC} placeholder="クローズ" />
        <br/>
        <label>
          万丈:
        </label>
        <input type="text" name="banjo" onChange={this.handleChangeBanjo} placeholder="万丈" />
        <br/>
        <label>
          名詞:
        </label>
        <input type="text" name="name" onChange={this.handleChangeName} placeholder="代表戦" />
        <br/>
        <label>
          動詞A:
        </label>
        <input type="text" name="verbA" onChange={this.handleChangeVerbA} placeholder="出ない"/>
        <br/>
        <label>
          動詞B:
        </label>
        <input type="text" name="verbB" onChange={this.handleChangeVerbB} placeholder="出る"/>
        <br/>
        <label>
          動詞C:
        </label>
        <input type="text" name="verbC" onChange={this.handleChangeVerbC} placeholder="手を挙げる"/>
        <br/>
        <label>
          動詞D:
        </label>
        <input type="text" name="verbD" onChange={this.handleChangeVerbD} placeholder="勝てない"/>
        <br/>
        <label>
          動詞E:
        </label>
        <input type="text" name="verbE" onChange={this.handleChangeVerbE} placeholder="責める"/>
        <br/>
        <label>
          動詞F:
        </label>
        <input type="text" name="verbF" onChange={this.handleChangeVerbF} placeholder="戦う"/>
        <br/>
        <label>
          敵:
        </label>
        <input type="text" name="enemy" onChange={this.handleChangeEnemy} placeholder="グリス"/>
        <br/>
        <label>
          組織:
        </label>
        <input type="text" name="organization" onChange={this.handleChangeOrganization} placeholder="東都"/>
        <br/>
        <button type="button" name="makeButton" onClick={this.handleMakeWord}>
          作成
        </button>
        <br/>
        <textarea name="kanso" rows="20" cols="80" value= {this.state.inputText} />
        <br/>
      </div>
    );
  }
}

export default BanjoFull;