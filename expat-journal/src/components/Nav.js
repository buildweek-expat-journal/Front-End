import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  text-decoration: none;
  height: 60px;
  align-items: center;
  font-size: 20px;
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
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 24px;
  height: 100%;
  color: #283c46;
  font-family: "Roboto Condensed", serif;
  font-size: 1rem;
`;

export default function Nav(props) {
  return (
      <div>
    <StyledNav>

        <div onClick={() => props.history.push('/')} className="logo">Expat<span>Journal</span></div>

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
