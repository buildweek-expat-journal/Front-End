import React, {useContext, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileContext } from '../contexts/ProfileContext'
import axios from 'axios';


function Profile() {
    console.log(ProfileContext)
    console.log('is anything working?')
    const variable = useContext(ProfileContext)
    console.log(variable)

    // console.log(travlerState)
    // useEffect(() => {
    //     axios.get(`https://expat-journal-api.herokuapp.com/users/${travlerState.user_id}`)
    //     .then(res => changeTraveler(res.data))
    // })
    // console.log(travlerState)
    return (
        <div className='profile-wrapper'>
            {/* {console.log('Hello')} */}
            {/* banner image of the profile */}
            {/* <img src='https://images.unsplash.com/photo-1567913300214-364d5256df1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'></img> */}
            {/* header with the location of the trip */}
            {/* <h1>{travlerState.first_name}</h1> */}

            {/* bottom section of page underneath the banner image that will display the tabs */}
            {/* <div> */}
                {/* <h2>Your Trips</h2> */}
                {/* <NavLink  to={`/profile/${travlerState.user_id}/editTrip/${travlerState.userTrips.trip_id}`}>+ Add Trip</NavLink> */}
                {/* <div> */}
                    {/* {travlerState.userTrips.map(element => <div style={{backgroundImage: `url(${element.locationCardUrl})`}}>{element.location}</div>)} */}
                {/* </div> */}
            {/* </div> */}
            
        </div>
    )
}

export default Profile