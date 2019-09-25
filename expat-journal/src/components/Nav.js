import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  text-decoration: none;
  height: 80px;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  background-color: #F6F2EF;
  font-family: 'Roboto Condensed', serif;
  span {
      font-weight: bold;
  }
  .logo {
      flex-grow: 2;
      justify-content: flex-start;
      text-align: left;
      padding-left: 20px;
      color: black;
      margin-left: 40px;
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
  font-size: 1.5rem;
  margin-right: 40px;
`;

export default function Nav(props) {
  return (
      <div>
    <StyledNav>

        <div onClick={() => props.history.push('/')} className="logo">🌎 &nbsp;Expat<span>Journal</span></div>

      <StyledNavLink exact to="/" activeClassName="activeNavButton">
        Home
      </StyledNavLink>
      <StyledNavLink to="/browse" activeClassName="activeNavButton">
        Browse
      </StyledNavLink>
      <StyledNavLink to="/login" activeClassName="activeNavButton">
        Login
      </StyledNavLink>

    </StyledNav>
    </div>
  );
}
