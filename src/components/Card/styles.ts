import styled from 'styled-components'
import { colors as V } from '../../styles/variables'

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  margin: 1.5rem 0rem;
  background-color: ${V.darkBlue};
  border-radius: 1rem;
  border: 1px solid ${V.darkside};

  & > :nth-child(2) {
    justify-self: start;
  }
`
