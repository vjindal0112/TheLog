import styled from "styled-components";
import { MOBILE_BREAKPOINT, LIGHT, BORDER_RADIUS } from '../constants';


const Card = styled.div`
  padding: 1rem;
  border-radius: ${BORDER_RADIUS};
  background-color: ${LIGHT};
  /* From https://tobiasahlin.com/blog/layered-smooth-box-shadows/ */
  box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.15), 
              0 4px 4px rgba(0,0,0,0.10), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.05);

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    min-width: 30rem;
  }
`;

export { Card }