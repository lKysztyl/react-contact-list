import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store/index.ts'
import { remove } from '../../store/reducers/infoUser.ts'
import { remove as fakeApiRemove } from '../../store/reducers/fakeAPI.ts'
import { Form } from '../../store/reducers/infoUser.ts'

import Profile from '../Profile'
import ProfileCard from '../ProfileCard'
import { ButtonContainer } from '../../styles'
import { Card as StyledCard } from './styles.ts'
import { CardButton as EditButton } from '../Buttons/styles.ts'
import { CardButton as RemoveButton } from '../Buttons/styles.ts'

const Card = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userData = useSelector((state: RootReducer) => state.user.userData)
  const formData = useSelector((state: RootReducer) => state.form.forms)

  const handleEdit = (userId: number | undefined) => {
    if (userId !== undefined) {
      navigate(`/contact/${userId}`)
    }
  }

  return (
    <>
      {userData.map((user) => (
        <div key={user.id}>
          <StyledCard>
            <Profile photo={user.photo} />
            <ProfileCard
              email={user.email}
              name={user.name}
              phone={user.phone}
            />
            <ButtonContainer>
              <EditButton onClick={() => handleEdit(user.id)}>
                Editar
              </EditButton>
              <RemoveButton
                onClick={() => {
                  if (user.phone && user.email) {
                    dispatch(
                      fakeApiRemove({ phone: user.phone, email: user.email })
                    )
                  }
                }}
              >
                Remover
              </RemoveButton>
            </ButtonContainer>
          </StyledCard>
        </div>
      ))}

      {formData.map((form: Form, index: number) => (
        <div key={index + 1000}>
          <StyledCard>
            <Profile />
            <ProfileCard
              email={form.email}
              name={form.name}
              phone={form.phone}
            />
            <ButtonContainer>
              <EditButton onClick={() => handleEdit(index + 1000)}>
                Editar
              </EditButton>

              <RemoveButton
                onClick={() => {
                  if (form.phone && form.email) {
                    dispatch(remove({ phone: form.phone, email: form.email }))
                  }
                }}
              >
                Remover
              </RemoveButton>
            </ButtonContainer>
          </StyledCard>
        </div>
      ))}
    </>
  )
}

export default Card
