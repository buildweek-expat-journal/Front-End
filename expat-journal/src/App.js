import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import './App.css';
import Trip from './Trip';

// import Home from './components/Home'
// import Browse from './components/Browse'
// import Traveler from './components/Traveler'
// import Trip from './components/Trip'
// import Profile from './components/Profile'
import LoginForm from "./components/LoginForm";
// import EditTrip from "./components/EditTrip";
// import PrivateTrip from "./components/PrivateTrip";
import {TripContext} from './contexts/TripContext';
import { ProfileContext } from './contexts/ProfileContext';
import {AllTripsContext} from './contexts/AllTripsContext';
import {AllProfilesContext} from './contexts/AllProfilesContext';

function App() {

  const traveler = {
    //Required fields
    first_name: '',
    last_name: '',
    email:'',
    password:'',
    profileType: 'public/private',
    //Auto-generated
    profileUrl:'',
    profileCardUrl: '',
    userTrips: [],
  };

  const loginCreds = {
    email: '',
    password: '',
  }

  const location = {
    user_id: '',
    location:'',
    description: '',
    pictures: [],
    locationUrl: '',
    locationCardUrl: '',
  };

  //Each public traveler displayed on public browse page with Card
  const profiles = [];
  const userTrips = [];

  const[travelerState, setTraveler] = useState(traveler);
  const[locationState, setLocation] = useState(location);
  const[profilesState, setProfiles] = useState(profiles);
  const[useTripsState, setUserTrips] = useState(userTrips);
  const[loginState, setLogin] = useState(loginCreds);


  return (
    <Router>
      <div className="App">
        <Switch>

          {/* <ProfileContext.Provider value={{travelerState, setTraveler}}>
            <Route exact path="/" component={Home} />
          </ProfileContext.Provider> */}
          <ProfileContext.Provider value={{loginState, setLogin}}>
            <Route exact path="/login" component={LoginForm} />
          </ProfileContext.Provider>
          {/* <Route exact path="/browse" component={Browse} />
          <Route exact path="/traveler/:id" component={Traveler} />
          <Route exact path="/traveler/:id/location/:lid" component={Trip} />
          <PrivateRoute path="/bubbles" component={Profile} />
          <PrivateRoute path="/bubbles" component={EditTrip} />
          <PrivateRoute path="/bubbles" component={PrivateTrip} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
