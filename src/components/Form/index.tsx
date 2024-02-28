import { FormEvent } from 'react'
//import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ContactContainer, MainContainer } from '../../styles'
//import SaveButton from '../Buttons/saveButton'
import { SaveButton } from '../Buttons/styles'
import * as S from './styles'

const Form = () => {
  //const dispatch = useDispatch()
  const navigate = useNavigate()

  const addContact = (e: FormEvent) => {
    e.preventDefault()
    //dispatch()
    navigate('/')
  }

  return (
    <MainContainer>
      <h1>Informações do contato</h1>
      <ContactContainer>
        <S.Form onSubmit={addContact}>
          <S.Input type="text" />
          <S.Input type="email" name="" id="" />
          <S.Input type="number" />
          <SaveButton type="submit" value="Salvar" />
        </S.Form>
      </ContactContainer>
    </MainContainer>
  )
}

export default Form
