import React, {useContext} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from 'axios';

import { ProfileContext } from '../contexts/ProfileContext';

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

const LoginForm = () => {

    const {loginState, setLogin} = useContext(ProfileContext)
    const handleChanges=(event) => {
        console.log(loginState)
        setLogin({...loginState, [event.target.name]: event.target.value});
    }

    return (<StyledLogin>
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setValues }) => {
                axios.post(`https://expat-journal-api.herokuapp.com/users/login`, loginState)
                .then(response => console.log(response))
                .catch(err => {
                    console.log(err.message)
                })
            }}

            // validationSchema={Yup.object().shape({
            // email: Yup.string()
            //     .email()
            //     .required("Required"),
            // password: Yup.string()
            //     .required("No password provided.")
            //     .min(5, "Password should be a minimum of 8 characters.")
            // })}
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
                    value={loginState.email}
                    onChange={handleChanges}
                    className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && <StyledError>{errors.email}</StyledError>}
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
                {errors.password && touched.password && <StyledError>{errors.password}</StyledError>}
                <br />
                <StyledButton type="submit" disabled={isSubmitting}>
                    Login
                </StyledButton>
                </form>
            );
            }}
        </Formik>
    </StyledLogin>)
};

export default LoginForm;