import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import Browse from './components/Browse'
import Traveler from './components/Traveler'
import Footer from './components/Footer'

import Trip from './components/Trip'
import Profile from './components/Profile'
import LoginForm from "./components/LoginForm";
import EditTrip from "./components/EditTrip";
// import PrivateTrip from "./components/";
import PrivateRoute from './auth/routes/PrivateRoute'
import WelcomePage from './components/WelcomePage'
import NewTrip from './components/NewTrip'

import {TripContext} from './contexts/TripContext';
import { ProfileContext } from './contexts/ProfileContext';
import {AllTripsContext} from './contexts/AllTripsContext';
import {AllProfilesContext} from './contexts/AllProfilesContext';
import EditBlog from './components/EditBlog.js'
import SignUpForm from './components/SignUp';
function App() {

  const traveler = {
    //Required fields
    first_name: '',
    last_name: '',
    email:'',
    password:'',
    profileType: '',
    //Auto-generated
    profileUrl:'',
    profileCardUrl: '',
    userTrips: [],
    user_id: "",
  };

  const loginCreds = {
    email: '',
    password: '',
    user_id: ''
  }

  const location = {
    user_id: '',
    location:'',
    description: '',
    pictures: [],
    locationUrl: '',
    locationCardUrl: '',
    trip_id: ''
  };

  const defaultImg =[{url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'},
  {url: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
  {url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}]

  //Each public traveler displayed on public browse page with Card
  const profiles = [];
  const userTrips = [];

  const[travelerState, setTraveler] = useState(traveler);
  const[locationState, setLocation] = useState(location);
  const[profilesState, setProfiles] = useState(profiles);
  const[tripsState, setUserTrips] = useState(defaultImg);
  const[loginState, setLogin] = useState(loginCreds);



  return (

    <div>
      <Router>
        <div className="App">
          {/* <Nav /> */}
          <Route  path="/" component={Nav}/>

          
            <Route exact path="/browse" component={Browse} />
            <PrivateRoute exact path='/profile/:id' component={Profile} />
            {/* <PrivateRoute path="/profile/:id/location/:lid/edit" component={EditBlog} /> */}
            <TripContext.Provider value={{tripsState, setUserTrips}}>
              <PrivateRoute path="/profile/:id/newTrip" component={NewTrip} />
            </TripContext.Provider>
            <PrivateRoute path="/profile/:id/location/:lid" component={EditTrip} />
            {/* <PrivateRoute path="/profile/:id/location/:lid" component={PrivateTrip} />  */}
            <ProfileContext.Provider value={{loginState, setLogin, setTraveler, travelerState}}>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/traveler/:id" component={Traveler} />
              <Route path="/traveler/:id/location/:lid" component={Trip} />
            </ProfileContext.Provider> 
        </div>
         <Footer />
      </Router>
    </div>
  );
}

export default App;

