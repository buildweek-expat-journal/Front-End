import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.div`
  display: flex;
  text-decoration: none;
  height: 6vh;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  background-color: #f6f2ef;
  font-family: "Roboto Condensed", serif;
  background: #2DA561;
  position: fixed;
  bottom: 0px;
  span {
    font-weight: bold;
  }
  .logo {
    flex-grow: 2;
    justify-content: flex-start;
    text-align: center;
   
    color: black;
  
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    display: none;
    flex-direction: column;
    align-items: center;
    height: 12%;
    .logo {
      padding-left: 0;
      margin: 5% 0;
    }
    a {
      margin-right: 0;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 24px;
  color: #283c46;
  font-family: "Roboto Condensed", serif;
  font-size: 1rem;
  margin-right: 40px;
`;


class Footer extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {

    return (
      <StyledNav className="footer-bar">
        <div className="footer-div">
          <h6>© Copyright 2019</h6>
          <div onClick={() => this.props.history.push("/")} >
            🌎 &nbsp;
          </div>
        </div>
      </StyledNav>
    )
  }
}

export default Footer
