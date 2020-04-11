import styled from 'styled-components';

interface ButtonProps {
  background: string;
  content: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ background }) => background};
  border-radius: 0.25rem;
  width: 2rem;
  height: 1rem;
`

const Button = (props) => (
  <StyledButton background="red">
    {props.content}
  </StyledButton>
)

export {Button}