import { ProfileCard as StyledProfileCard } from './styles.ts'
import { UserData } from '../../store/reducers/fakeAPI.ts'

const ProfileCard = ({ email, name }: UserData) => {
  return (
    <StyledProfileCard>
      <h2>{name ?? 'Nome não informado'}</h2>
      <ul>
        <li>Numb</li>
        <li>{email ?? 'Email não informado'}</li>
      </ul>
    </StyledProfileCard>
  )
}

export default ProfileCard
