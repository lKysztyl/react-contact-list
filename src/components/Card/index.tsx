import { Card as StyledCard } from './styles.ts'
import Profile from '../Profile'
import ProfileCard from '../ProfileCard'
import CardButton from '../Buttons'
import { ButtonContainer } from '../../styles'

const Card = () => {
  return (
    <StyledCard>
      <Profile />
      <ProfileCard />
      <ButtonContainer>
        <CardButton />
        <CardButton />
      </ButtonContainer>
    </StyledCard>
  )
}

export default Card
