import React from "react";
import UserCard from "./TravelerCard";
import styled from "styled-components";

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
`;


export default function UserList(props) {
    //Check what data and images are coming down from props here//   
  const { userList } = props;            
  return (
    <div>
      <Title>User Profiles</Title>
      <StyledCards>
        {userList.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            image={user.image}
          />
        ))}
      </StyledCards>
    </div>
  );
}