import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardButton = styled.button`
  display: block;
  width: 125px;
  height: 25px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: rgba(00, 00, 0, 0.25);
  cursor: pointer;
  margin: 1rem;
`

export const SaveButton = styled.input`
  display: block;
  width: 125px;
  height: 25px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: green;
  cursor: pointer;
  margin: 2rem auto;
`

export const CancelButton = styled(SaveButton)`
  background-color: red;
`

export const NewContactButton = styled(Link)`
  background-color: #fff;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  color: #000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 1rem;
  text-align: center;
`

export default CardButton
