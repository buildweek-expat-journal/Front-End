import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileContext } from '../contexts/ProfileContext'
import axios from 'axios';
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 22px -1px rgba(87, 81, 87, 0.65);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 350px;
  height:100px;
  margin: 20px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px #111;
  font-size: 1.1rem;
  &:hover {
    transform: scale(1.05);

`;

function Profile(props) {
    console.log(props)
    console.log(ProfileContext)
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`https://expat-journal-api.herokuapp.com/users/${props.match.params.id}`)
        .then(res => {
            setUser(res.data);
            console.log(res.data)
        })
    },[])


    
    const clickHandle = (event, element) => {
        event.persist()
        console.log(element.id)
        props.history.push(`/profile/${props.match.params.id}/location/${element.id}`)
    }
    return (
        <div className='profile-wrapper'>
            <div className='header-container'>
                <h1>{`Hello, ${user.first_name}`}</h1>
            </div>
            {/* banner image of the profile */}
            <div className='public-trip-header-div'>
                <img className="public-trip-header-img" src='https://images.unsplash.com/photo-1567913300214-364d5256df1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'></img>
            </div>
            {/* header with the location of the trip */}
           

            {/* bottom section of page underneath the banner image that will display the tabs */}
            <div>
                <h2>Your Trips</h2>
                <NavLink className="add-trip" to={`/profile/${user.id}/newTrip`}>+ Add Trip</NavLink>
                <div className="profile-trip-div traveler-trips-container">
                    {console.log(user)}
                { !user.trips ? <h3>Loading</h3> : 
                    user.trips.map(element => {
                        console.log(element)
                        return <StyledCard onClick={(event) => clickHandle(event, element)} key={element.id} style={{backgroundImage: `url(${element.locationCardUrl})`}}>{element.location}</StyledCard>
                })}
                
                </div>
            </div>
            
        </div>
    )
}

export default Profile