import React from "react";
import { Card , Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';


const UserCard = props => {

    
    return (
<Link to={`/traveler/${props.user.id}`}>

      <Card >
          <Card.Content>
          <Image src={"https://images.unsplash.com/photo-1569176106333-acbfe0bacabb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"} wrapped ui={false} />
  <Card.Header>{props.user.first_name}</Card.Header>
  <Card.Meta>{props.user.email}</Card.Meta>
  <Card.Description>{props.user.last_name}</Card.Description>
</Card.Content>

      <Card.Content extra>
       
      </Card.Content>
</Card>
</Link>
    );
    
};

export default UserCard;
