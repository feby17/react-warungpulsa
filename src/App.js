import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './component/Login';
import WarungPulsa from './component/WarungPulsa';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="./Login" />
        </Route>
        {/* Login Route */}
        <Route exact path="/Login">
          <Login />
        </Route>
        {/* End Route */}
        {/* Body Route */}
        <Route exact path="/WarungPulsa">
          <WarungPulsa />
        </Route>
        {/* End Route */}
      </Switch>
    </Router>
  );
}

export default App;
