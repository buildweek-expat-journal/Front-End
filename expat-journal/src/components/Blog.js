import React, { useContext } from 'react';
import { TripContext } from '../contexts/TripContext';


function Blog(props) {

    const {state} = useContext(TripContext)

    return (
        <div className='blog-container'>
            {/* contains the description text from each trip */}
            <h1 className='blog-name'>{state.location} Blog</h1>
            <p>{state.description}</p>
        </div>
    )
}

export default Blog;