import React, {useContext, useEffect } from "react";
import TravelerCard from './TravelerCard.js'
import {AllProfilesContext} from '../contexts/AllProfilesContext.js'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Traveler(props) {
    const user = useContext (AllProfilesContext)
    console.log (user.travelerState, "users")


    
   

    return (
        <div>
            
            <h1>Travelers</h1>
            {/* <h1>{user.travelerState.email}</h1>
            <h1>{user.travelerState.first_name}</h1>
            <h1>{user.travelerState.last_name}</h1> */}

              {/* <NavLink to={`/users/${user.id}`}> */}
            <section>
                {user.travelerState.map(traveler => (
                    <TravelerCard key={traveler.id} traveler={traveler} />
                ))}
            </section> 
              <h1>{user.travelerState.userTrips}</h1>
              {/* </NavLink> */}
        </div>
        
    );
}

export default Traveler;


