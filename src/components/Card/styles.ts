import styled from 'styled-components'

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  background-color: rgba(02, 62, 138, 0.25);
  border-radius: 1rem;
  border: 1px solid rgba(00, 00, 0, 0.25);

  & > :nth-child(2) {
    justify-self: start;
  }
`
