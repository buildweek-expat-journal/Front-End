import React, {useState, useEffect, useContext} from 'react';
import { ProfileContext } from '../contexts/ProfileContext'
import axios from 'axios';
import { Card, Image, Modal, Button } from "semantic-ui-react";
import Login from './LoginForm.js'
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



function Traveler(props) {
    // console.log(props.match.params.id)
    // console.log(ProfileContext)
    const {setTraveler} = useContext(ProfileContext)

    const [user, setUser] = useState({})
    const [images, setImages]= useState ({})

    useEffect(() => {
        axios.get(`https://expat-journal-api.herokuapp.com/users/${props.match.params.id}`)
        .then(res => {
            setUser(res.data);
            setTraveler(res.data)
            console.log(res.data, "data")
        }) 
      
        
        axios.get(`https://expat-journal-api.herokuapp.com/trips/`)
      .then(res => {
          setImages({url:res.data.filter(element => element.user_id===user.id )});
          setTraveler(res.data,)
          console.log(res.data, "trips")
        }) 
        },[])

  
   

    const clickHandle = (event, element) => {
        event.persist()
        // console.log(element.id)
        props.history.push(`/traveler/${user.id}/location/${element.id}`)
    }
    return (
        <div className='profile-wrapper'>
            {console.log(user)}
            {/* {console.log(images, "images")} */}
            { !images.url ? console.log("not working") :  console.log(images,"images ") }

            <div className='header-container'>
              <h1>{`Welcome to ${user.first_name}'s page`}</h1>
            </div>
            {/* banner image of the profile */}

            <div className='public-trip-header-div'>
              <img className="public-trip-header-img" src='https://images.unsplash.com/photo-1567913300214-364d5256df1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'></img>
            </div>
            {/* header with the location of the trip */}
            

            {/* bottom section of page underneath the banner image that will display the tabs */}
            <div>
                <h2>{`${user.first_name}'s Trips`}</h2>
                {/* <img src={user.trips.photo[2]}></img> */}
                
                <div className="traveler-trips-container">
                    {/* {console.log(user)} */}
                { !user.trips ? <h3>Loading</h3> : 
                    user.trips.map(element => {
                        console.log(user)
                        console.log(element,"element")
                        return <StyledCard  className="traveler-trip-div" onClick={(event) => clickHandle(event, element)} key={element.id} style={{backgroundImage: `url(${element.locationCardUrl})`}}>{element.location}</StyledCard>
                })}
               
                </div>
            </div>
            
        </div>
    )
}

export default Traveler

