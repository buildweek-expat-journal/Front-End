import React, { useEffect, useState, useContext} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Blog from './Blog'
import axios from 'axios'
import { ProfileContext } from '../contexts/ProfileContext';
import { TripContext } from '../contexts/TripContext';
import TripImageList from './TripImageList';
import { Card, Image, Modal, Button } from "semantic-ui-react";




function Trip(props) {

    const [state, setState] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://expat-journal-api.herokuapp.com/trips/${props.match.params.lid}`)
        .then((res) => {
            console.log(res.data,"stateeee")
            setState(res.data)
        })
        axios.get(`https://expat-journal-api.herokuapp.com/users/${props.match.params.id}`)
        .then((res) => {
            // console.log(res.data)
            setUser(res.data)

        })
    },[props.match.params.lid, props.match.params.id])

    const BlogButton = () => (
        <Modal
          trigger={
            <Button>
              Blog
            </Button>
          }
        >
          <Modal.Header>{user.first_name}'s Blog</Modal.Header>
         
         <h1>{state.description}</h1> 
        
        </Modal>
      );

      const ImageButton = () => (
        <Modal
          trigger={
            <Button>
              Images
            </Button>
          }
        >
          <Modal.Header>{user.first_name}'s Trip Images</Modal.Header>
         
          <TripImageList /> 
        
        </Modal>
      );



    return (
        <div className='trip-wrapper'>
            {/* header with the location of the trip */}

            {/* {console.log(props)} */}
            <h1>{state.location}</h1>
            
            <h2 onClick={() => props.history.push(`/traveler/${props.match.params.id}`)}>{`by ${user.first_name} ${user.last_name}`}</h2>

            {/* banner image of the location */}
            {!state ? '' : console.log(state)}
            <div className='public-trip-header-div'>
                <img src={!state.photos ? '' : state.photos[0].url} alt='tokyo street' className="public-trip-header-img" />
            </div>
            {/* bottom section of page underneath the banner image that will display the tabs */}
            <nav className='trip-sub-nav'>
                {/*  Blog tab with a description of that given trip */}
                
                {/* <NavLink className='trip-sub-nav-tab' to={`/traveler/${props.match.params.id}/location/${props.match.params.lid}/`}>Blog</NavLink> */}
                {/* links to a Pictures tab with an image grid of a given trip */}
                {/* <NavLink className='trip-sub-nav-tab' to={`/traveler/${props.match.params.id}/location/${props.match.params.lid}/images`}>Images</NavLink> */}
            </nav>

            {/* renders the blog text/description of the trip */}
            <div>
                <Switch>
                    <TripContext.Provider value={{state, setState}}>
                        <div className='public-trip-content'>
                            {/* <Route 
                                exact path={`/traveler/:id/location/:lid`}
                                render={(state) => {
                                    console.log(state)
                                    return <Blog description={state.description}/> 
                                }}
                            /> */}
                            {/* routes to images */}
                            <Route 
                                exact path="/traveler/:id/location/:lid/images" 
                                render={() => <TripImageList /> }
                            />
                            <BlogButton/>
                            <ImageButton/>
                        </div>
                    </TripContext.Provider> 
                </Switch>
            </div>
         
        </div>
    )
}



export default Trip;