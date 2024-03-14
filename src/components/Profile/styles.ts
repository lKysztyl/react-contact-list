import styled from 'styled-components'
import { UserData } from '../../store/reducers/fakeAPI'
import { colors as V } from '../../styles/variables'

export const Profile = styled.div<UserData>`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background-color: ${V.gray};
  background-image: url(${(props) => props.photo});
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid ${V.greyishBlue};
`
