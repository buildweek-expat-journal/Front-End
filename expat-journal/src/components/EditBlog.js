import React, { useState, useContext } from 'react';
import '../App.css';
import { axiosWithAuth } from '../auth/AxiosWithAuth';
import { AllTripsContext } from '../contexts/AllTripsContext';


export default function EditBlog (props) {
    const { state, setState } = useContext(AllTripsContext);
    console.log(state)
    var edit = "";

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value});
        console.log(state)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        edit=state
        delete edit.photos
        axiosWithAuth()
            .put(`/trips/${state.id}`, edit)
            .then(res => {
                props.history.push(`/profile/${props.match.params.id}/location/${props.match.params.lid}`)
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




// import React, { useState, useContext } from 'react';
// import '../App.css';
// import { axiosWithAuth } from '../auth/AxiosWithAuth';
// import { AllTripsContext } from '../contexts/AllTripsContext';


// const initialDescription = {
//     description: "",
    
//   };
  

// export default function EditBlog (props) {
//     const { state, setState } = useContext(AllTripsContext);
//     const [descriptionToEdit, setDescriptionToEdit] = useState(initialDescription);
//     console.log(descriptionToEdit,"this is desc")

//     console.log(props,"this is props")

//     const editDescription = description => {
        
//         setDescriptionToEdit(description);
//       };

//       useEffect(() => {
//         getData()
//       }, []);
//       const getData = () =>{
//         axiosWithAuth()
//                 .get('http://localhost:5000/api/colors')
//                 .then((res) => {
//                     console.log(res, 'response from colors');
//                     setColorList(res.data);
//                 })
//                 .catch((err) => console.log(err));
//         }

  

      
// //     axiosWithAuth()
// //     .put(`/trips/${descriptionToEdit.id}`, descriptionToEdit)
// //     .then(response => {
        
// //         // getData() 
      
// //     })
// //     .catch(err => console.log(err))
    
// //   };
  




//     // const handleChange = (event) => {
//     //     setState({...state, [event.target.name]: event.target.value});
//     //     console.log(state)
//     // }

//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     axiosWithAuth()
//     //         .put(`/trips/${state.id}`, state)
//     //         .then(res => {
//     //             console.log(res)
//     //         })
//     //         .catch(err => console.log(err));
//     // }

//     return(
//         <form onSubmit={event => handleSubmit(event)} className="loginForm">
//             <textarea 
//             type="text" 
//             name="description" 
//             value={state.description} 
//             onChange={ event => handleChange(event)}/>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }
