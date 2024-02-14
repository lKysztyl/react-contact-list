import styled, { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-style: normal;

  }
`

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 55rem;
  background-color: #ccc;
  text-align: center;
`

export const Container = styled.div`
  max-width: 96rem;
  height: 100vh;
  background-color: #cfffff;
`

export const ButtonContainer = styled.div`
  display: block;
  width: 100%;
  margin-left: auto;
`

export default globalStyle
