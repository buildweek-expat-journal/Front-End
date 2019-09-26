import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.div`
  display: flex;
  text-decoration: none;
  height: 80px;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  background-color: #f6f2ef;
  font-family: "Roboto Condensed", serif;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
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
  }

  render() {

    return (
      <StyledNav>
        <StyledNavLink exact to="/" activeClassName="activeNavButton">
          Terms
        </StyledNavLink>
        <StyledNavLink to="/" activeClassName="activeNavButton">
          Privacy
        </StyledNavLink>
        <StyledNavLink to="/" activeClassName="activeNavButton">
          Security
        </StyledNavLink>
        <StyledNavLink to="/" activeClassName="activeNavButton">
          Help
        </StyledNavLink>
        <div onClick={() => this.props.history.push("/")} className="logo">
          🌎 &nbsp;
        </div>
        <StyledNavLink to="/" activeClassName="activeNavButton">
          Contact
        </StyledNavLink>
        <StyledNavLink to="/" activeClassName="activeNavButton">
          API
        </StyledNavLink>
        <StyledNavLink to="/" activeClassName="activeNavButton">
          Blog
        </StyledNavLink>
        <StyledNavLink to="/" activeClassName="activeNavButton">
          About
        </StyledNavLink>

      </StyledNav>
    )
  }
}

export default Footer
