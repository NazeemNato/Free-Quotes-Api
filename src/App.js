import React from 'react';
import './App.css';
import NaVbar from './Asset/NavBar'
import Home from './pages/Home'
import EgId from './pages/EgId'
import About from './pages/About'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <NaVbar/>
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/Examples" component={EgId} />
     <Route exact path="/About" component={About} />
    </Switch> 
   
    </div>
  );
}

export default App;
