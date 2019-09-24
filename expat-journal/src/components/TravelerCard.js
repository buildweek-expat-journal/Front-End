import React from "react";
import {Card, Image} from "semantic-ui-react";



const TravelerCard = props => {

    
    return (

//         <div>

// <h2>{props.traveler.first_name}</h2>
// <h2>{props.traveler.last_name}</h2>
// <h2>{props.traveler.email}</h2>



//         </div>
      <Card >
          <Card.Content>
          <Image src={"https://images.unsplash.com/photo-1569176106333-acbfe0bacabb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"} wrapped ui={false} />
  <Card.Header>{props.traveler.first_name}</Card.Header>
  <Card.Meta>{props.traveler.email}</Card.Meta>
  <Card.Description>{props.traveler.last_name}</Card.Description>
</Card.Content>

      <Card.Content extra>
       
      </Card.Content>
</Card>
    );
    
};

export default TravelerCard;
