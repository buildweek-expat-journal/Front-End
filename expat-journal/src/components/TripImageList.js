import React, { useContext } from 'react';
import { TripContext } from '../contexts/TripContext';
import Trip from './Trip';


function TripImageList(props) {

    const {state} = useContext(TripContext)

    return (
        <div className='image-list-container'>
            {/* contains the pictures from each trip */}
            {console.log(state)}
            {!state.photos ? <div>Loading</div> : state.photos.map(element => 
                <div><img src={element.url} alt="blahblah"/></div>
            )}
            {/*  */}
        </div>
    )
}

export default TripImageList;