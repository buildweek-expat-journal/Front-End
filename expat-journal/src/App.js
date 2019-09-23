import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import "./styles.css";

const StyledLogin = styled.div`
  width: 500px;
  border: 1px solid black;
  margin: 0 auto;
  height: 400px;
  background-color: #f7f7f7;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-left: 20px;
  box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.75);

  h1 {
    padding-bottom: 30px;
    text-align: center;
  }

  label {
    padding-left: 10px;
  }
`;

function App() {
  return (
    <div className="App">
      <StyledLogin>
        <h1>Login</h1>
        <LoginForm />
      </StyledLogin>
    </div>
  );
}

export default App;
