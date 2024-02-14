import { RootReducer } from '../../store/index.ts'
import { useSelector } from 'react-redux'

import { Card as StyledCard } from './styles.ts'
import Profile from '../Profile'
import ProfileCard from '../ProfileCard'
import EditButton from '../Buttons/editButton.tsx'
import DelButton from '../Buttons/delButton.tsx'
import { ButtonContainer } from '../../styles'

const Card = () => {
  const userData = useSelector((state: RootReducer) => state.user.userData)
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
              <EditButton />
              <DelButton />
            </ButtonContainer>
          </StyledCard>
        </div>
      ))}
    </>
  )
}

export default Card
