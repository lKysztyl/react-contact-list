import styled from 'styled-components'

export const Form = styled.form`
  margin: 1rem auto;
  max-width: 35rem;
  width: 100%;
  padding: 3rem 0 1rem 0;
  font-weight: bold;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  border-radius: 1rem;
`

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 20rem;
  width: 100%;
  margin: 0.5rem auto 1rem auto;
  padding: 0.3rem;
  font-weight: bold;
  background-color: #fff;
  border-radius: 0.5rem;
  border: none;
  color: #666666;
`

export const Label = styled.label`
  display: block;
  color: #fff;
  left: -8.8rem;
  position: relative;
`

export const NewContactTitel = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  position: relative;
  margin: 0.5rem 0 2rem 0;
`
