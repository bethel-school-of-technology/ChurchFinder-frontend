import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Addchurch from './components/Addchurch';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () =>
(
  <Router>
    <div className="App">
    <Nav />
      <Switch>      
      <Route path="/" exact component={Home} />
      <Route path="/Addchurch" component={Addchurch} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
      </Switch>
    </div>
  </Router>


)

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
