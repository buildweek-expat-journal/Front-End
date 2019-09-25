import React from "react";
import { Card , Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 22px -1px rgba(87, 81, 87, 0.65);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px grey;
  font-size: 1.1rem;
  transition: 0.5s;
  color: black;
  &:hover {
    transform: scale(1.05);

`;
 

const UserCard = props => {

    
    return (
<Link to={`/traveler/${props.user.id}`}>
<div className="user-card-container">
<StyledCard className="styled-card">
          
          <img className="user-card-img" src={"https://images.unsplash.com/photo-1569176106333-acbfe0bacabb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"}/>
  <h1>{props.user.first_name} {props.user.last_name}</h1>
  <h3>{props.user.email.toLowerCase()}</h3>



      </StyledCard>
      </div>
</Link>
    );
    
};

export default UserCard;
