import { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ContactContainer, MainContainer } from '../../styles'
import { SaveButton } from '../Buttons/styles'
import * as S from './styles'
import { setUserInfo } from '../../store/reducers/infoUser'
import { UserData } from '../../store/reducers/fakeAPI'

const Form = ({ UserData }: { UserData: UserData }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addContact = (e: FormEvent) => {
    e.preventDefault()
    dispatch(setUserInfo(UserData[1]))
    navigate('/')
  }

  return (
    <MainContainer>
      <ContactContainer>
        <S.Form onSubmit={addContact}>
          <S.NewContactTitel>Informações do contato</S.NewContactTitel>
          <S.Label htmlFor="inputName">Name:</S.Label>
          <S.Input type="text" id="inputName" />
          <S.Label htmlFor="inputEmail">Email:</S.Label>
          <S.Input type="email" id="inputEmail" />
          <S.Label htmlFor="inputPhone">Phone:</S.Label>
          <S.Input type="number" id="inputPhone" />
          <SaveButton type="submit" value="Save" />
        </S.Form>
      </ContactContainer>
    </MainContainer>
  )
}

export default Form
