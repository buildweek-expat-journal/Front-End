import React, { useContext, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import {axiosWithAuth} from '../auth/AxiosWithAuth.js';



const StyledForm = styled.div`
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

  h2{
      padding: 1rem;
      font-family: 'Roboto Condensed', serif;
      font-size: 28px;
  }

  label {
    padding: 1rem;
    color: #495057;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    box-shadow: none;
  }
`;

const StyledInput = styled.input`
  margin: 1rem;
  width: 90%;
  margin-bottom: 5px;
  height: 3.125rem;
  border-radius: 0.25rem;
`;

const StyledSelect = styled.select`
  margin: 1rem;
  width: 90%;
  margin-bottom: 5px;
  height: 3.125rem;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #2DA561;
  color: #fff;
  width: 90%;
  border: 1px solid #22283A;
  padding: 1rem;
  line-height: 1;
  margin: 1rem;
  background-color: 250ms;
  margin-bottom: 40px;
  margin-right: 40px;
  border-radius: 4px;
  font-size: 1,125rem;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2DA562;
    border: 1px solid #2DA562;
  }
`;

const SignUpForm = (props) => {
  const [ register, setRegister ] = useState({});

  const handleChanges = (event) => {
    console.log(register)
    setRegister({ ...register,
       [event.target.name]: event.target.value });
  }    
  return (  
  <Formik

      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        // confirmPassword: "",
        profileType: ""
      }}
    
          onSubmit={(values, { setValues }) => {
        axiosWithAuth()
        .post(`https://expat-journal-api.herokuapp.com/users/register`, register)
          .then(response => {
            console.log(response.data, "from signup")
            localStorage.setItem('token', response.data.token);
          props.history.push(`/profile/${response.data.user_id}`)
          })
          .catch(err => {
            console.log(err.message)
           
          })
      }}

          validationSchema={Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
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
        <StyledForm onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
      {/*     <label htmlFor="firstName">First Name</label> */}
          <StyledInput
            name="firstName"
            type="text"
            placeholder="First name"
            value={values.firstName}
            onChange={handleChange}
          />

          <ErrorMessage name="firstName" component="div" />
     {/*      <label htmlFor="lastName">Last Name</label> */}
          <StyledInput
            name="lastName"
            type="text"
            placeholder="Last name"
            value={values.lastName}
            onChange={handleChange}
          />

          <ErrorMessage name="lastName" component="div" />

        {/*   <label htmlFor="email">Email</label> */}
          <StyledInput
            name="email"
            type="text"
            placeholder="Email address"
            value={values.email}
            onChange={handleChange}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <br />
          {/* <label htmlFor="password">Password</label> */}
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

      {/*     <label htmlFor="confirmPassword">Confirm Password</label> */}
          <StyledInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
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
        </StyledForm>
      );
    }}
  </Formik>
);


    // {
    //   "email": "johndoe@gmail.com",
    //   "password": "blahblah",
    //   "first_name": "John",
    //   "last_name": "Doe",
    //   "profileType": "public" // private is the alternative
    // }







//       {props => {
//         const {
//           values,
//           touched,
//           errors,
//           isSubmitting,
//           handleChange,
//           handleSubmit
//         } = props;
//         return (
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="firstName">First Name</label>
//             <StyledInput
//               name="first_name"
//               type="text"
//               placeholder="Enter your first name"
//               value={register.first_name}
//               onChange={handleChanges}
//             />

//             <ErrorMessage name="firstName" component="div" />
//             <label htmlFor="lastname">Last Name</label>
//             <StyledInput
//               name="last_name"
//               type="text"
//               placeholder="Enter your last name"
//               value={register.last_name}
//               onChange={handleChanges}
//             />

//             <ErrorMessage name="lastName" component="div" />

//             <label htmlFor="email">Email</label>
//             <StyledInput
//               name="email"
//               type="text"
//               placeholder="Enter your email"
//               value={register.email}
//               onChange={handleChanges}
//               className={errors.email && touched.email && "error"}
//             />
//             {errors.email && touched.email && <div>{errors.email}</div>}
//             <br />
//             <label htmlFor="email">Password</label>
//             <StyledInput
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               value={register.password}
//               onChange={handleChanges}
//               className={errors.password && touched.password && "error"}
//             />
//             {errors.password && touched.password && <div>{errors.password}</div>}
//             <br />

            {/* <label htmlFor="confirmPassword">Confirm Password</label>
            <StyledInput
              name="confirmPassword"
              type="password"
              placeholder="Enter your password"
              onChange={handleChanges}
              className={
                errors.confirmPassword && touched.confirmPassword && "error"
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div>{errors.confirmPassword}</div>
            )} */}
//             <label htmlFor="profileType">Select Profile Type</label>
//             <br />
//             <StyledSelect
//               name="profileType"
//               value={register.profileType}
//               onChange={handleChanges}
//             >
//               <option value="" label="Please select below" />
//               <option value="private profile" label="private profile" />
//               <option value="public profile" label="public profile" />
//             </StyledSelect>
//             {errors.profileType && touched.profileType && (
//               <div className="input-feedback">{errors.profileType}</div>
//             )}
//             <br />

//             <StyledButton type="submit" disabled={isSubmitting}>
//               Sign Up
//           </StyledButton>
//           </form>
//         );
//       }}
//     </Formik>
//   );
}
export default SignUpForm;
