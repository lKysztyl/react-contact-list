import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
  height: 95%;
  text-align: center;
  background-color: blue;
`

export const ContactContainer = styled(MainContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 96rem;
  height: 100vh;
  background: linear-gradient(
    to right,
    rgb(55, 65, 81),
    rgb(17, 24, 39),
    rgb(0, 0, 0)
  );
`

export const ButtonContainer = styled.div`
  display: block;
  width: 100%;
  margin-left: auto;
`

export default GlobalStyle
