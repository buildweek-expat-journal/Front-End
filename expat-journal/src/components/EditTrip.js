import React, { useEffect, useState} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Blog from './Blog'
import axios from 'axios'
import EditBlog from './EditBlog';

import { AllTripsContext } from '../contexts/AllTripsContext';


function EditTrip(props) {
    const [state, setState] = useState({})
    useEffect(() => {
        console.log(props)
        axios.get(`https://expat-journal-api.herokuapp.com/trips/${props.match.params.lid}`)
        .then((res) => {
            // console.log(res.data)
            setState(res.data)
        })
    },[])

    const arr = ""
    return (
        <div className='trip-wrapper'>
            {/* header with the location of the trip */}

             {/* {console.log(props)} */}
             <h1>{state.location}</h1>


            {/* banner image of the location */}
            {!state ? '' : console.log(state)}
            <img src={!state.photos ? '' : state.photos[0].url} alt='tokyo street'></img>

            {/* bottom section of page underneath the banner image that will display the tabs */}
            <nav className='trip-sub-nav'>
                {/*  Blog tab with a description of that given trip */}
                <NavLink to={`/traveler/:id/location/:lid/`}>Blog</NavLink>
                {/* links to a Pictures tab with an image grid of a given trip */}
                <NavLink to={`/traveler/:id/location/:lid/images`}>Images</NavLink>
            </nav>
            <Switch>
                {/* renders the blog text/description of the trip */}
                <AllTripsContext.Provider value={{state, setState}}>
                    <Route 
                        exact path="/traveler/:id/location/:lid/"
                        render={() => <EditBlog /> }
                    />              
                </AllTripsContext.Provider>
                {/* routes to images */}
                <Route 
                    exact path="/traveler/:id/location/:lid/images" />
            </Switch>
        </div>
    )
}



export default EditTrip;