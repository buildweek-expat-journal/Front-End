import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

/* const StyledSignUp = styled.div`   
width: 500px;                           
border: 1px solid black;               
margin: 0 auto;                         
height: 800px;                         
background-color: #f7f7f7;
font-family: 'Roboto', sans-serif;
text-align: left;
padding-left: 20px;
box-shadow: 10px 10px 16px 0px rgba(0,0,0,0.75);

h1 {
  padding-bottom: 30px;
  text-align: center;
}

label {
  padding-left: 10px;
}
`; */
//The above code was some general styling held in App.js on my CodeSandbox. Just keeping it in here for future reference if need to refer to later.//

const StyledInput = styled.input`
  margin: 10px;
  width: 90%;
  margin-bottom: 5px;
  height: 22px;
`;

const StyledSelect = styled.select`
  margin: 10px;
  width: 90%;
  margin-bottom: 5px;
  height: 22px;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: black;
  color: white;
  border: 1px solid white;
  background-color: 250ms;
  float: right;
  margin-bottom: 40px;
  margin-right: 40px;
  :hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const SignUpForm = () => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      profileType: ""
    }}
    onSubmit={(values, { setValues }) => {
      setTimeout(() => {
        console.log("Signing Up", values);
        setValues(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password should be a minimum of 8 characters.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      profileType: Yup.string().required("Please select a profile type")
    })}
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
          <label htmlFor="firstName">First Name</label>
          <StyledInput
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={values.firstName}
            onChange={handleChange}
          />

          <ErrorMessage name="firstName" component="div" />
          <label htmlFor="lastName">Last Name</label>
          <StyledInput
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={values.lastName}
            onChange={handleChange}
          />

          <ErrorMessage name="lastName" component="div" />

          <label htmlFor="email">Email</label>
          <StyledInput
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <br />
          <label htmlFor="email">Password</label>
          <StyledInput
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
          <br />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <StyledInput
            name="confirmPassword"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            className={
              errors.confirmPassword && touched.confirmPassword && "error"
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div>{errors.confirmPassword}</div>
          )}
          <label htmlFor="profileType">Select Profile Type</label>
          <br />
          <StyledSelect
            name="profileType"
            value={values.profileType}
            onChange={handleChange}
          >
            <option value="" label="Please select below" />
            <option value="private profile" label="private profile" />
            <option value="public profile" label="public profile" />
          </StyledSelect>
          {errors.profileType && touched.profileType && (
            <div className="input-feedback">{errors.profileType}</div>
          )}
          <br />

          <StyledButton type="submit" disabled={isSubmitting}>
            Sign Up
          </StyledButton>
        </form>
      );
    }}
  </Formik>
);

export default SignUpForm;
