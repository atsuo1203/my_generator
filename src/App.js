import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import BanjoLittle from './BanjoLittle';
import BanjoFull from './BanjoFull';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to='/little'>簡易バージョン</Link></li>
              <li><Link to='/full'>フルバージョン</Link></li>
            </ul>
            <hr />
            <Route exact path='/little' component={BanjoLittle} />
            <Route exact path='/full' component={BanjoFull} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
