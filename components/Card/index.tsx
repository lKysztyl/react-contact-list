import { Card as StyledCard } from './styles.ts'
import Profile from '../Profile'
function Card() {
  return (
    <StyledCard>
      <Profile />
      <h1>Hellow Card!</h1>
    </StyledCard>
  )
}

export default Card
