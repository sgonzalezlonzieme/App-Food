import './App.css';
import { Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage/LandingPage';
import React from "react";
import { Home } from './components/Home/Home';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';


function App() {
  return (
    <React.Fragment>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/home" component={Home}/>
    {/* <Route exact path="/home" component={Details}/>
    <Route exact path="/home" component={Create}/> */}
    </React.Fragment>
  );
}

export default App;
