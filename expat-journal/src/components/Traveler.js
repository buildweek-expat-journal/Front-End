import React, {useState, useEffect, useContext} from 'react';
import { ProfileContext } from '../contexts/ProfileContext'
import axios from 'axios';


function Traveler(props) {
    console.log(props.match.params.id)
    console.log(ProfileContext)
    const {setTraveler} = useContext(ProfileContext)

    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`https://expat-journal-api.herokuapp.com/users/${props.match.params.id}`)
        .then(res => {
            setUser(res.data);
            setTraveler(res.data)
            console.log(res.data)
        })
    },[])

    const clickHandle = (event, element) => {
        event.persist()
        console.log(element.id)
        props.history.push(`/traveler/${user.id}/location/${element.id}`)
    }
    return (
        <div className='profile-wrapper'>
            {console.log(user)}
            {/* banner image of the profile */}
            <img src='https://images.unsplash.com/photo-1567913300214-364d5256df1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'></img>
            {/* header with the location of the trip */}
            <h1>{`Hello, ${user.first_name}`}</h1>

            {/* bottom section of page underneath the banner image that will display the tabs */}
            <div>
                <h2>{`${user.first_name}'s Trips`}</h2>
                
                <div>
                    {console.log(user)}
                { !user.trips ? <h3>Loading</h3> : 
                    user.trips.map(element => {
                        console.log(user)
                        return <div onClick={(event) => clickHandle(event, element)} key={element.id} style={{backgroundImage: `url(${element.locationCardUrl})`}}>{element.location}</div>
                })}
                
                </div>
            </div>
            
        </div>
    )
}

export default Traveler