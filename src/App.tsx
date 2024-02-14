import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setUserData } from './store/reducers/fakeAPI'

import GlobalStyle, { Container, MainContainer } from './styles/index'
import Card from './components/Card/index'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then((response) => response.json())
      .then((data) => {
        const limitedUsers = data.slice(0, 3)
        console.log(limitedUsers)
        dispatch(setUserData(limitedUsers))
      })
      .catch((error) => {
        console.error('Ocorreu um erro:', error)
      })
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainContainer>
          <h1>Dados do Usuário:</h1>
          <Card />
        </MainContainer>
      </Container>
    </>
  )
}

export default App
