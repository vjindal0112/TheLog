import * as React from 'react';
import styled from "styled-components";
import { Spacer } from './Spacer';

const StyledNavBar = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.15), 
              0 4px 4px rgba(0,0,0,0.10), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.05);
  align-items: center;
`;

interface NavBarProps {
  loggedIn: boolean;
  onClickSignIn(): void;
  onClickSignUp(): void;
}

/**
 * The navbar at the top of each page.
 */
const NavBar: React.FC<NavBarProps> = ({ loggedIn, onClickSignUp, onClickSignIn }) => (
  <StyledNavBar>
    <h1>The Log</h1>
    <div style={{ flex: 1 }} />
    {!loggedIn && (
      <>
        <a style={{ cursor: 'pointer' }} onClick={onClickSignUp}>
          Sign In
        </a>
        <Spacer width="1rem" />
        <a style={{ cursor: 'pointer' }} onClick={onClickSignIn}>
          Sign Up
        </a>
        <Spacer width="1rem" />
      </>
    )}
    
  </StyledNavBar>
);

export { NavBar };
