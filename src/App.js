import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

import './global.css';

import Landing from './components/page/Landing';
import Survey from './components/page/Survey';
import Plan from './components/page/Plan';
import Footer from './components/shared/Footer';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/survey" component={Survey} />
            <Route path="/meal-plan" component={Plan} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
