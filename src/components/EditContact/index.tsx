import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { RootReducer } from '../../store'
import { setUserData } from '../../store/reducers/fakeAPI'

import { ContactContainer, MainContainer, FlexContainer } from '../../styles'
import { CancelButton, SaveButton } from '../Buttons/styles'
import * as S from '../Form/styles'

const EditContact = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string | undefined }>()
  const userId = id ? parseInt(id) : undefined

  const user = useSelector((state: RootReducer) =>
    state.user.userData.find((user) => user.id === userId)
  )

  const [userEdit, setUserEdit] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserEdit({
      ...userEdit,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setUserData(userEdit))
    navigate('/')
  }

  const returnPageButton = () => {
    navigate('/')
  }

  if (!user) {
    return <div>Usuário não encontrado</div>
  }

  return (
    <MainContainer>
      <ContactContainer>
        <S.Form onSubmit={handleSubmit}>
          <S.NewContactTitel>Editar Usuário</S.NewContactTitel>
          <S.Label htmlFor="inputName">Name:</S.Label>
          <S.Input
            type="text"
            id="inputName"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
          <S.Label htmlFor="inputEmail">Email:</S.Label>
          <S.Input
            type="email"
            id="inputEmail"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          <S.Label htmlFor="inputPhone">Phone:</S.Label>
          <S.Input
            type="tel"
            id="inputPhone"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
          />
          <FlexContainer>
            <CancelButton
              type="button"
              value="Cancel"
              onClick={returnPageButton}
            />
            <SaveButton type="submit" value="Save" />
          </FlexContainer>
        </S.Form>
      </ContactContainer>
    </MainContainer>
  )
}

export default EditContact
