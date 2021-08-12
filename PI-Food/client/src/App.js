import './App.css';
import { Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage/LandingPage';
import React from "react";
import { Home } from './components/Home/Home';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe.js';
import { Details } from './components/Details/Details';
import { NavBar } from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation()

  return (
    <div>
    {location.pathname === '/' ? null : <NavBar/>}
    <React.Fragment>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/recipe/details/:id" component={Details}/>
    <Route exact path="/recipe/create" component={CreateRecipe}/> 
    </React.Fragment>
    </div>
  );
}

export default App;
