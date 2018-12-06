import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/" exact component={()=><h1>Ikea's home page</h1>}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
        
      </div>
    );
  }
}

export default App;
