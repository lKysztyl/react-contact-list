import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ContactContainer, MainContainer } from '../../styles'
import { SaveButton } from '../Buttons/styles'
import * as S from './styles'
import { setUserInfo } from '../../store/reducers/infoUser'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const addContact = (e: FormEvent) => {
    e.preventDefault()
    dispatch(setUserInfo(formData))
    navigate('/')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <MainContainer>
      <ContactContainer>
        <S.Form onSubmit={addContact}>
          <S.NewContactTitel>Informações do contato</S.NewContactTitel>
          <S.Label htmlFor="inputName">Name:</S.Label>
          <S.Input
            type="text"
            id="inputName"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <S.Label htmlFor="inputEmail">Email:</S.Label>
          <S.Input
            type="email"
            id="inputEmail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <S.Label htmlFor="inputPhone">Phone:</S.Label>
          <S.Input
            type="tel"
            id="inputPhone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <SaveButton type="submit" value="Save" />
        </S.Form>
      </ContactContainer>
    </MainContainer>
  )
}

export default Form
