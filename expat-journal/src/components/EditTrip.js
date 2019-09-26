import React, { useEffect, useState} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import {axiosWithAuth} from '../auth/AxiosWithAuth.js'
import EditBlog from './EditBlog';
import TripImageList from './TripImageList'
import Blog from './Blog';

import { AllTripsContext } from '../contexts/AllTripsContext';
import { TripContext } from '../contexts/TripContext';


function EditTrip(props) {
    const [state, setState] = useState({})
    useEffect(() => {
        console.log(props)
        axiosWithAuth().get(`https://expat-journal-api.herokuapp.com/trips/${props.match.params.lid}`)
        .then((res) => {
            // console.log(res.data)
            setState(res.data)
        })
    },[props])

     
  function edit() {
    props.history.push(`/profile/${props.match.params.id}/location/${props.match.params.lid}/edit`)
  }
  function deleteTrip() {
    axiosWithAuth().delete(`https://expat-journal-api.herokuapp.com/trips/${props.match.params.lid}`)
    .then((res) => {
    props.history.push(`/profile/${props.match.params.id}`)
    })
  }

    return (
        
        <div className='trip-wrapper'>
            {/* header with the location of the trip */}
            <div className='header-container'>
                <h1>{state.location}</h1>
            </div>
           
             {/* {console.log(props)} */}
             <div className='private-button-container'>
                <button className='private-button' id='edit' onClick={edit}>Edit trip</button>
                <button className='private-button' id='delete' onClick={deleteTrip}>Delete trip</button>
            </div>
            {/* banner image of the location */}
            {!state ? '' : console.log(state)}
            <div className="private-trip-header-div">
                <img className='private-trip-header-img' src={!state.photos ? '' : state.photos[0].url} alt='tokyo street'></img>
            </div>
            {/* bottom section of page underneath the banner image that will display the tabs */}
            <nav className='trip-sub-nav'>
                {/*  Blog tab with a description of that given trip */}
                <NavLink className='trip-sub-nav-tab' to={`/profile/${props.match.params.id}/location/${props.match.params.lid}/`}>Blog</NavLink>
                {/* links to a Pictures tab with an image grid of a given trip */}
                <NavLink className='trip-sub-nav-tab' to={`/profile/${props.match.params.id}/location/${props.match.params.lid}/images`}>Images</NavLink>
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
                    <div className='public-trip-content'>
                        <Route 
                                exact path="/profile/:id/location/:lid" 
                                render={() => <Blog /> }
                        />
                        <Route 
                            exact path="/profile/:id/location/:lid/images" 
                            render={() => <TripImageList /> }
                        />
                    </div>
                </TripContext.Provider>
        </div>
    )
}



export default EditTrip;