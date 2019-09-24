import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  text-decoration: none;
  height: 64px;
  align-items: center;
  font-size: 20px;
  width: 100%;
  border-bottom: 1px solid black;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 24px;
  height: 16px;
  color: white;
  background: black;
`;

export default function Nav() {
  return (
    <StyledNav>
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
  );
}
