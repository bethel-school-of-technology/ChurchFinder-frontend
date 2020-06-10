import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import Addchurch from './screens/Addchurch';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () =>
(
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/Addchurch" component={Addchurch} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />

    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
