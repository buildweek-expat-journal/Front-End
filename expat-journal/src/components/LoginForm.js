import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

import { ProfileContext } from "../contexts/ProfileContext";

const asiaImage = require("../../src/projectImages/asia.jpeg");

const StyledContainer = styled.div`
  padding-top: 100px;
  background-image: url(${asiaImage});
  background-repeat: no-repeat;
  padding-bottom: 100px;
`;

const StyledLogin = styled.div`
  width: 500px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin: 0 auto;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-left: 24px;
  box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.75);
  margin-top: 200px;

  h2 {
    padding: 1rem;
    padding-top: 2rem;
    font-family: "Roboto Condensed", serif;
    font-size: 28px;
    font-weight: 400;
  }

  label {
    padding: 1rem;
    color: #495057;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;

const StyledInput = styled.input`
  margin: 1rem;
  width: 90%;
  margin-bottom: 5px;
  height: 3.125rem;
  border-radius: 0.25rem;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #2da562;
  color: #fff;
  width: 90%;
  border: 1px solid #22283a;
  padding: 1rem;
  line-height: 1;
  margin: 1rem;
  background-color: 250ms;
  margin-bottom: 40px;
  margin-right: 40px;
  border-radius: 4px;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
`;

const StyledError = styled.div`
  color: red;
  padding-left: 15px;
  margin-top: -6px;
`;

const LoginForm = props => {
  const { loginState, setLogin } = useContext(ProfileContext);

  const handleChanges = event => {
    console.log(loginState);
    setLogin({ ...loginState, [event.target.name]: event.target.value });
  };

  return (
    <StyledContainer>
      <StyledLogin>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setValues }) => {
            axios
              .post(
                `https://expat-journal-api.herokuapp.com/users/login`,
                loginState
              )
              .then(response => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                props.history.push(`/profile/${response.data.user_id}`);
              })
              .catch(err => {
                console.log(err.message);
              });
          }}
       /*    validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required"),

            password: Yup.string()
              .required("No password provided.")
              .min(5, "Password should be a minimum of 8 characters.")
          })} */
          //I wasn't sure why the yup validation was commented out. I 
          //commented it back in so that I could style the errors etc. but it
          //isn't fully working the way it was. (Only .required error shows up.)
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleSubmit
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <StyledInput
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={loginState.email}
                  onChange={handleChanges}
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <StyledError>{errors.email}</StyledError>
                )}
                <br />
                <label htmlFor="email">Password</label>
                <StyledInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={loginState.password}
                  onChange={handleChanges}
                  className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                  <StyledError>{errors.password}</StyledError>
                )}
                <br />
                <StyledButton type="submit" disabled={isSubmitting}>
                  Login
                </StyledButton>
              </form>
            );
          }}
        </Formik>
      </StyledLogin>
    </StyledContainer>
  );
};

export default LoginForm;
