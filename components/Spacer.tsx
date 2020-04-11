import styled from 'styled-components';

interface SpacerProps {
  height?: string;
  width?: string;
}

/**
 * Creates a blank space of the given height and width. If one of height
 * or width are undefined, defaults to 100%.
 */
const Spacer = styled.div<SpacerProps>`
  height: ${({ height }) => height ? height : '100%'};
  width: ${({ width }) => width ? width : '100%'};
`

export { Spacer }