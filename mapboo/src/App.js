import React from 'react';
import './App.css';
//import Header from './Header';
import Map from './Map';
import Form from './Form';
import Footer from './Footer';
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// routes will be home, map and form 

function App() {
  


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home"><span class="material-symbols-outlined">home</span></Link>
            </li>
            <li>
              <Link to="/map"><span class="material-symbols-outlined">map</span></Link>
            </li>
            <li>
              <Link to="/form"><span class="material-symbols-outlined">comment</span></Link>
            </li>
          </ul>
        </nav>
        <footer />
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/map">
            <Map/>
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/home">   
            <Home />
          </Route>
          <Route path="/">   
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
