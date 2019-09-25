import React from "react";
import Nav from "./Nav";
import SignUp from "./SignUp";
import styled from "styled-components";

const romeImage = require("../../src/projectImages/rome.jpeg");

const StyledLeft = styled.div`
  width: 50%;
  h1 {
    font-size: 2.6rem;
    color: white;
    padding-bottom: 3rem;
  }
  p {
    color: white;
    font-size: 1.8rem;
  }
  img {
    width: 2000px;
  }
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #2DA562;
  color: #fff;
  width: 100px;
  border: 1px solid #2DA562;
  padding: 1rem;
  line-height: 1;
  margin: 1rem;
  background-color: 250ms;
  margin-bottom: 40px;
  margin-right: 40px;
  border-radius: 4px;
  font-size: 1.125rem;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
`;

const StyledRight = styled.div`
  width: 50%;
  h1 {
    padding-bottom: 3rem;
    font-family: "Roboto Condensed" serif;
    color: white;
    font-size: 2.6rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  padding-top: 100px;
  background-image: url(${romeImage});
  background-repeat: no-repeat;
`;


export default function WelcomePage() {
  return (
    <StyledContainer>
      <StyledLeft>
        <h1>Welcome to Expat Journal</h1>

        <StyledButton>Log In</StyledButton>
      </StyledLeft>

      <StyledRight>
        <h1>Not a member?</h1>
        <SignUp />
      </StyledRight>
    </StyledContainer>
  );
}
