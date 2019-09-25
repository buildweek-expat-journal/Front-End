import React, { useState, useContext } from 'react';
import '../App.css';
import { axiosWithAuth } from '../auth/AxiosWithAuth';
import { AllTripsContext } from '../contexts/AllTripsContext';


export default function EditBlog (props) {
    const { state, setState } = useContext(AllTripsContext);
    console.log(props)

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value});
        console.log(state)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .put(`/trips/${state.id}`, state)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    return(
        <form onSubmit={event => handleSubmit(event)} className="loginForm">
            <textarea type="text" name="description" value={state.description} onChange={ event => handleChange(event)}/>
            <button type="submit">Submit</button>
        </form>
    )
}
