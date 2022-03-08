import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './compopnents/Navbar';
import Home from './compopnents/Home';
import Teams from './compopnents/Teams';
import FFS from './compopnents/FFS';
import Contact from './compopnents/Contact';
import Foot from './compopnents/Foot';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route exact path="/ffs">
              <FFS />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
