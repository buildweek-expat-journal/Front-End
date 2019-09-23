import React from 'react';
import {Router, NavLink} from 'react-router-dom';


function Trip(props) {
    return (
        <div className='trip-wrapper'>
            {/* header with the location of the trip */}
            <h1>{`location goes here`}</h1>
            {/* banner image of the location */}
            <img src=""></img>

            <nav className='trip-sub-nav'>
                {/* links to a Blog tab with a description of that given trip */}
                <NavLink to={`/traveler/location/${trip.id}`}>Blog</NavLink>
                {/* links to a Pictures tab with an image grid of a given trip */}
                <NavLink to={`/traveler/location/${trip.id}`}>Pictures</NavLink>
            </nav>

            {/* renders the blog text/description of the trip */}
            <Route 
                exact path="/traveler/location/:id"
                render={() => <Blog trip={trip} /> }
            />
            
        </div>
    )
}








export default Trip;