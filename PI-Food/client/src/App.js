import './App.css';
import { Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage/LandingPage';
import React from "react";
import { Home } from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/home" component={Home}/>
    </React.Fragment>
  );
}

export default App;
