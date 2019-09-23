import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const StyledInput = styled.input`
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

const StyledError = styled.div`
color: red;
padding-left: 10px;
`

const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setValues }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setValues(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password should be a minimum of 8 characters.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
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
          <label htmlFor="email">Email</label>
          <StyledInput
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && <StyledError>{errors.email}</StyledError>}
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
          {errors.password && touched.password && <StyledError>{errors.password}</StyledError>}
          <br />
          <StyledButton type="submit" disabled={isSubmitting}>
            Login
          </StyledButton>
        </form>
      );
    }}
  </Formik>
);

export default LoginForm;
