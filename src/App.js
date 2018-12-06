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
              <li>
                <Link to="/">home</Link>

              </li>
              <li>
                <Link to="/users">user</Link>
              </li>
              <li>
                <Link to="/news">news</Link>
              </li>
            </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/" exact component={()=><div><img width="200px" height="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2000px-Ikea_logo.svg.png" /><h1>Ikea's home page</h1></div>}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/users/:userid" component={({match})=>{
            return <h1>hello user {match.params.userid}</h1>
          }}></Route>
          <Route path="/users" component={()=><h1>user page</h1>}></Route>
          <Route path="/news" component={()=><h1>news page</h1>}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
        
      </div>
    );
  }
}

export default App;
