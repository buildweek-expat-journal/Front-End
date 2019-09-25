import React, { useContext } from 'react';
import { TripContext } from '../contexts/TripContext';


function Blog(props) {

    const {state} = useContext(TripContext)

    return (
        <div className='blog-container'>
            {/* contains the description text from each trip */}
            <p>{state.description}</p>
        </div>
    )
}

export default Blog;