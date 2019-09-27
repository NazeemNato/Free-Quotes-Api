import React from 'react';
import './App.css';
import NaVbar from './Asset/NavBar'
import Home from './pages/Home'
import EgId from './pages/EgId'
import About from './pages/About'
import Error from './pages/Error'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <NaVbar/>
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/Examples" component={EgId} />
     <Route exact path="/About" component={About} />
     <Route component={Error} />
    </Switch> 
   
    </div>
  );
}

export default App;
