import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./index.css";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header></header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/traveler/:id" component={Traveler} />
          <Route exact path="/traveler/location/:id" component={Trip} />
          <PrivateRoute path="/bubbles" component={Profile} />
          <PrivateRoute path="/bubbles" component={EditTrip} />
          <PrivateRoute path="/bubbles" component={PrivateTrip} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
