// import React, { useContext, useState } from "react";
// import { Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import styled from "styled-components";
// import {axiosWithAuth} from '../auth/AxiosWithAuth.js';

import React, { useContext, useState } from "react";
import { Formik /* ErrorMessage */ } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

/* const StyledForm = styled.div`
  width: 500px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin: 0 auto;
  height: 600px;
  background-color: #f7f7f7;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-left: 24px;
  box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.75);

  h1 {
    padding-bottom: 30px;
    text-align: center;
    font-family: "Roboto Condensed", serif;
    font-size: 32px;
  }

  h2 {
    padding: 1rem;
    font-family: "Roboto Condensed", serif;
    font-size: 28px;
  }

  label {
    padding: 1rem;
    color: #495057;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    box-shadow: none;
    margin-bottom: 5%;
  }
`; */

const StyledInput = styled.input`
  margin: 1rem;
  width: 90%;
  margin-bottom: 20px;
  height: 3.125rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
   @media screen and (max-width: 500px) { 
     margin: 10px auto;
   }
`;

const StyledSelect = styled.select`
  margin: 1rem;
  width: 90%;
  margin-bottom: 20px;
  height: 3.125rem;
  @media screen and (max-width: 500px){
    border: 1px solid #ced4da;
  }
`;

const StyledButton = styled.button`
  padding: 15px 15px;
  background-color: #2da561;
  color: #fff;
  width: 60%;
  border: 1px solid #22283a;
  padding: 1rem;
  line-height: 1;
  background-color: 250ms;
  margin: 30 40 40 0;
  border-radius: 4px;
  font-size: 2rem;

  @media screen and (max-width: 500px) {
    text-align: center;
    margin: 0 auto;
    font-size: 1.5rem;
  }

  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
`;

const StyledSignUp = styled.form`
  width: 500px;
  border: 0;
  border-radius: 0.25rem;
  margin: 0 auto;
  height: 700px;
  background-color: rgba(255, 255, 255, 0.9);
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding-left: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3),
  0 2px 4px -1px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 500px) {
    padding-left: initial;
    height: 600px;
  }

  h2 {
    text-align: left;
    padding-bottom: 20px;
    padding-left: 1.7rem;
    padding-top: 50px;
    font-size: 2rem;
    font-family: "Roboto Condensed", serif;
    font-weight: 400;
    @media screen and (max-width: 500px){
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 80%;
    box-shadow: none;
    margin-bottom: 5%;
    h2 {
      text-align: center;
      padding-left: initial;
    }
  }
`;

const StyledError = styled.div`
  color: red;
  text-align: left;
  padding-left: 25px;
  margin-top: -20px;
  @media screen and (max-width: 500px) {
    padding-left: 21px;
  }
`;

const SignUpForm = props => {
  const [register, setRegister] = useState({});

  const handleChanges = event => {
    console.log(register);
    console.log(props);
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileType: ""
      }}
      onSubmit={(values, { setValues }) => {
        axios
          .post(
            `https://expat-journal-api.herokuapp.com/users/register`,
            register
          )
          .then(response => {
            console.log(response.data, "from signup");
            localStorage.setItem("token", response.data.token);
            props.history.push(`/profile/${response.data.user_id}`);
          })
          .catch(err => {
            console.log(err.message);
          });
      }}
   /*    validationSchema={Yup.object().shape({
        first_name: Yup.string().required("First Name is required"),
        last_name: Yup.string().required("Last Name is required"),
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(3, "Password should be a minimum of 3 characters.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
        profileType: Yup.string().required("Please select a profile type")
      })} */

      //I wasn't sure why the yup validation was commented out. I commented it back in for styling the error messages but it isn't fully working the way it was. (Only .required error shows up.)//
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
          <StyledSignUp onSubmit={handleSubmit}>
            {/* <label htmlFor="firstName">First Name</label> */}
            <h2>Sign Up</h2>
            <StyledInput
              name="first_name"
              type="text"
              placeholder="First Name"
              value={register.first_name}
              onChange={handleChanges}
            />
            {errors.first_name && touched.first_name && (
              <StyledError>{errors.first_name}</StyledError>
            )}
            {/*   <ErrorMessage name="first_name" component="div" /> */}
            {/* <label htmlFor="lastname">Last Name</label> */}
            <StyledInput
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={register.last_name}
              onChange={handleChanges}
            />
            {errors.last_name && touched.last_name && (
              <StyledError>{errors.last_name}</StyledError>
            )}
            {/*   <ErrorMessage name="lastName" component="div" /> */}
            {/*  <label htmlFor="email">Email</label> */}
            <StyledInput
              name="email"
              type="text"
              placeholder="Email address"
              value={register.email}
              onChange={handleChanges}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <StyledError>{errors.email}</StyledError>
            )}
            <br />
            {/*   <label htmlFor="email">Password</label> */}
            <StyledInput
              name="password"
              type="password"
              placeholder="Enter your password"
              value={register.password}
              onChange={handleChanges}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <StyledError>{errors.password}</StyledError>
            )}
            <br />
            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
           {/*  //I put the confirm password field back in for styling but wasn't
            sure if it was commented out because we're not going to use it? I also took the labels out for styling purposes because the form was so long - not sure what you guys think?// */}
            <StyledInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              onChange={handleChanges}
              className={
                errors.confirmPassword && touched.confirmPassword && "error"
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <StyledError>{errors.confirmPassword}</StyledError>
            )}
            {/*      <label htmlFor="profileType">Select Profile Type</label> */}
            <br />
            <StyledSelect
              name="profileType"
              value={register.profileType}
              onChange={handleChanges}
            >
              <option value="" label="Select Profile Type" />
              <option value="private profile" label="private profile" />
              <option value="public profile" label="public profile" />
            </StyledSelect>
            {errors.profileType && touched.profileType && (
              <StyledError>{errors.profileType}</StyledError>
            )}
            <br />
            <StyledButton type="submit" disabled={isSubmitting}>
              Sign Up
            </StyledButton>
          </StyledSignUp>
        );
      }}
    </Formik>
  );
};
export default SignUpForm;
