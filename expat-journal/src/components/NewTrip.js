import React, { useState } from "react";
import { axiosWithAuth } from '../auth/AxiosWithAuth';

export default function NewTrip (props) {
  const [state, setState] = useState({
    location: '',
    description: '',
    short_desc: '',
  });

  const handleChange = (event) => {
      setState({...state, [event.target.name]: event.target.value});
      console.log(state)
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      axiosWithAuth()
          .post('/trips', state)
          .then(res => {
              console.log(res.data)
            //   props.history.push(`/profile/${props.match.params.id}`)
          })
          .catch(err => console.log(err.message));
  }

  return(
      <form onSubmit={event => handleSubmit(event)} className="loginForm">
          <input type="text" placeholder="City, State/Country" name="location" value={state.location} onChange={ event => handleChange(event)}/>
          <input type="text" placeholder="Short Description" name="short_desc" value={state.short_desc} onChange={ event => handleChange(event)}/>
          <textarea type="text" placeholder="Blog" name="description" value={state.description} onChange={ event => handleChange(event)}/>
          <button type="submit">Add Trip</button>
      </form>
  )
}