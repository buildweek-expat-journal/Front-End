import React, { useEffect, useState} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import axios from 'axios'
import EditBlog from './EditBlog';
import TripImageList from './TripImageList'
import Blog from './Blog';

import { AllTripsContext } from '../contexts/AllTripsContext';
import { TripContext } from '../contexts/TripContext';


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
                <NavLink to={`/profile/${props.match.params.id}/location/${props.match.params.lid}/`}>Blog</NavLink>
                {/* links to a Pictures tab with an image grid of a given trip */}
                <NavLink to={`/profile/${props.match.params.id}/location/${props.match.params.lid}/images`}>Images</NavLink>
            </nav>
        
                {/* renders the blog text/description of the trip */}
                <AllTripsContext.Provider  value={{state, setState}}>
                    <Route 
                        exact path="/profile/:id/location/:lid/edit"
                        render={(props) => <EditBlog {...props}/> }
                    />              
                </AllTripsContext.Provider>



                {/* routes to images */}
                <TripContext.Provider  value={{state, setState}}>
                    <Route 
                            exact path="/profile/:id/location/:lid" 
                            render={() => <Blog /> }
                    />
                    <Route 
                        exact path="/profile/:id/location/:lid/images" 
                        render={() => <TripImageList /> }
                    />
                </TripContext.Provider>
        </div>
    )
}



export default EditTrip;