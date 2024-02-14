import { RootReducer } from '../../store/index.ts'
import { useSelector } from 'react-redux'

import { Card as StyledCard } from './styles.ts'
import Profile from '../Profile'
import ProfileCard from '../ProfileCard'
import CardButton from '../Buttons'
import { ButtonContainer } from '../../styles'

const Card = () => {
  const userData = useSelector((state: RootReducer) => state.user.userData)
  return (
    <>
      {userData.map((user) => (
        <div key={user.id}>
          <StyledCard>
            <Profile />
            <ProfileCard email={user.email} name={user.name} />
            <ButtonContainer>
              <CardButton />
              <CardButton />
            </ButtonContainer>
          </StyledCard>
        </div>
      ))}
    </>
  )
}

export default Card
