import React, { useContext } from 'react';
import { TripContext } from '../contexts/TripContext';
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 22px -1px rgba(87, 81, 87, 0.65);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 20px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px #111;
  font-size: 1.1rem;
  &:hover {
    transform: scale(1.05);

`;

function TripImageList() {

    const {state} = useContext(TripContext)

    return (
        <div className='image-list-container'>
            {/* contains the pictures from each trip */}
            {console.log(state)}
            {!state.photos ? <div>Loading</div> : state.photos.map(element => 
                <StyledCard className="styled-card"><img className="user-card-img" src={element.url} alt="blahblah"/></StyledCard>
            )}
        </div>
    )
}

export default TripImageList;