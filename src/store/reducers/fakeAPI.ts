import { createSlice } from '@reduxjs/toolkit'

export interface UserData {
  id: number
  name: string
  company: string
  username: string
  email: string
  address: string
  zip: string
  state: string
  country: string
  phone: string
  photo: string
}

interface UserState {
  userData: UserData[] | null
  loading: boolean
}

const initialState: UserState = {
  userData: null,
  loading: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.loading = false
      state.userData = action.payload
    }
  }
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
