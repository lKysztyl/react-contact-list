import GlobalStyle, { Container, MainContainer } from './styles/index'
import Card from './components/Card/index'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MainContainer>
          <h1>Hellow</h1>
          <Card />
        </MainContainer>
      </Container>
    </>
  )
}

export default App
