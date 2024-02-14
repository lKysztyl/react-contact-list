import { UserData } from '../../store/reducers/fakeAPI.ts'
import * as S from './styles.ts'

const Profile = ({ photo }: UserData) => {
  return <S.Profile photo={photo} />
}

export default Profile
