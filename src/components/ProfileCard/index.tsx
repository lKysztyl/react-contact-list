import * as S from './styles.ts'
import { UserData } from '../../store/reducers/fakeAPI.ts'

const ProfileCard = ({ email, name, phone }: UserData) => {
  return (
    <S.ProfileCard>
      <h2>{name ?? 'Nome não informado'}</h2>
      <ul>
        <li>{phone ?? 'Telefone não informado'}</li>
        <li>{email ?? 'Email não informado'}</li>
      </ul>
    </S.ProfileCard>
  )
}

export default ProfileCard
