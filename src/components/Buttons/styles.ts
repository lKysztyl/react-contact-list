import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors as V } from '../../styles/variables'

export const CardButton = styled.button`
  display: block;
  width: 125px;
  height: 25px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: ${V.darkside};
  cursor: pointer;
  margin: 1rem;
`

export const SaveButton = styled.input`
  display: block;
  width: 125px;
  height: 25px;
  color: ${V.white};
  border: none;
  border-radius: 5px;
  background-color: ${V.green};
  cursor: pointer;
  margin: 2rem auto;
`

export const CancelButton = styled(SaveButton)`
  background-color: ${V.red};
`

export const NewContactButton = styled(Link)`
  background-color: ${V.white};
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  color: ${V.black};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 1rem;
  text-align: center;
`

export default CardButton
