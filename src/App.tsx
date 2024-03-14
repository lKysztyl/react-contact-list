import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setUserData } from './store/reducers/fakeAPI'

import GlobalStyle, { Container } from './styles/index'
import NewContact from './pages/NewContact/index'
import Home from './pages/Home'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/NewContact',
    element: <NewContact />
  },
  {
    path: '/contact/:id',
    element: <Contact />
  }
])

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
        <RouterProvider router={router} />
      </Container>
    </>
  )
}

export default App
