import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setUserData } from './store/reducers/fakeAPI'
import { RootReducer } from './store'

import GlobalStyle, { Container, MainContainer } from './styles/index'
import Card from './components/Card/index'

function App() {
  const dispatch = useDispatch()
  const userData = useSelector((state: RootReducer) => state.user.userData)

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUserData(data))
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
          <div>
            <h1>Dados do Usuário:</h1>
            {userData &&
              userData.map((user) => (
                <div key={user.id}>
                  <h2>Nome: {user.name}</h2>
                  <p>Empresa: {user.company}</p>
                  <p>Username: {user.username}</p>
                  <p>Username: {user.email}</p>
                </div>
              ))}
          </div>
          <Card />
        </MainContainer>
      </Container>
    </>
  )
}

export default App
