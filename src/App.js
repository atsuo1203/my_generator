import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import BanjoLittle from './BanjoLittle';
import BanjoFull from './BanjoFull';

class App extends Component {
  homeComponent = () => {
    return(
      <div>
        <h2>万丈ジェネレーター</h2>
        <p>必要項目を入力して万丈構文を作ろう!</p>
        <br/>
        <a href="http://dic.nicovideo.jp/a/%E4%B8%87%E4%B8%88%E6%A7%8B%E6%96%87">
          万丈構文の詳細はこちら
        </a>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to='/'>説明</Link></li>
              <li><Link to='/little'>簡易バージョン</Link></li>
              <li><Link to='/full'>フルバージョン</Link></li>
            </ul>
            <hr />
            <Route exact path='/' component={this.homeComponent} />
            <Route exact path='/little' component={BanjoLittle} />
            <Route exact path='/full' component={BanjoFull} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
