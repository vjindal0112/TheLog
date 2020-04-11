import * as React from 'react';
import styled from "styled-components";

const StyledNavBar = styled.div`
  width: 100%;
`;

const NavBar: React.FC = () => (
  <StyledNavBar>
    <h1>The log</h1>
  </StyledNavBar>
);

export { NavBar };
