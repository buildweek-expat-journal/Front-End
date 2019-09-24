import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Blog from './Blog'




function Trip(props) {

    return (
        <div className='trip-wrapper'>
            {/* header with the location of the trip */}

            <h1>{props.location}</h1>

            {/* banner image of the location */}
            <img src={props.locationUrl}></img>

            {/* bottom section of page underneath the banner image that will display the tabs */}
            <nav className='trip-sub-nav'>
                {/*  Blog tab with a description of that given trip */}
                <NavLink to={`/traveler/:id/location/:lid/`}>Blog</NavLink>
                {/* links to a Pictures tab with an image grid of a given trip */}
                <NavLink to={`/traveler/:id/location/:lid/images`}>Images</NavLink>
            </nav>

            {/* renders the blog text/description of the trip */}
            <Route 
                exact path="/traveler/:id/location/:lid/"
                render={() => <Blog description={props.description}/> }
            />
            {/* routes to images */}
            <Route 
                exact path="/traveler/:id/location/:lid/images" />
        </div>
    )
}








export default Trip;