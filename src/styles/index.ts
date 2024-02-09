import styled, { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
  }
`

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 55rem;
  background-color: blue;
  text-align: center;
`

export const Container = styled.div`
  max-width: 96rem;
  height: 100vh;
  background-color: green;
`

export default globalStyle
