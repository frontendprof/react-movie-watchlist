import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header,Add,Watched,Watchlist} from "./components";


import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Switch>


        <Route exact path="/">
          <Watchlist />
        </Route>

        <Route path="/watched">
          <Watched />
        </Route>

        <Route path="/add">
          <Add />
        </Route>



      </Switch>
    </Router>
  );
}

export default App;
