import * as React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS } from '../constants';

interface ButtonProps {
  background?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ background }) => background || 'black'};
  border-radius: ${BORDER_RADIUS};
  width: 5rem;
  height: 2rem;
  cursor: pointer;
  color: white;
`

const Button: React.FC<ButtonProps> = ({ background, children }) => (
  <StyledButton background={background}>
    {children}
  </StyledButton>
)

export {Button}