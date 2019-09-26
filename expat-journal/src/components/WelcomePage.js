import React from "react";
import Nav from "./Nav";
import SignUp from "./SignUp";
import styled from "styled-components";

const romeImage = require("../../src/projectImages/rome.jpeg");

const StyledLeft = styled.div`
  width: 50%;
  h1 {
    font-family: 'Roboto Condensed', serif;
    font-size: 3.5rem;
    color: white;
    padding-bottom: 3rem;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  p {
    color: white;
    font-size: 1.8rem;
  }
  img {
    width: 2000px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #2DA561;
  color: #fff;
  width: 180px;
  border: 1px solid #2DA561;
  padding: 1rem;
  line-height: 1;
  margin: 1rem;
  margin-bottom: 40px;
  margin-right: 40px;
  border-radius: 4px;
  font-size: 2rem;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
  @media screen and (max-width: 500px) {
    margin-right: 0;
   
  }
`;

const StyledRight = styled.div`
  width: 50%;
  h1 {
    padding-bottom: 3rem;
    font-family: 'Roboto Condensed', serif;
    color: white;
    font-size: 2.6rem;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url(${romeImage});
  background-repeat: no-repeat;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;


export default function WelcomePage(props) {
  return (
    <StyledContainer>
      <StyledLeft>
        <h1>Welcome to Expat Journal</h1>

        <StyledButton onClick={() => props.history.push('/login')}>Log In</StyledButton>
      </StyledLeft>

      <StyledRight>
        <h1 className="member-txt">Not a member?</h1>
        <SignUp {...props} />
      </StyledRight>
    </StyledContainer>
  );
}
