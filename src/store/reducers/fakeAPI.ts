import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface UserData {
  id?: number
  name?: string
  company?: string
  username?: string
  email?: string
  address?: string
  zip?: string
  state?: string
  country?: string
  phone?: string
  photo?: string
}

interface UserState {
  userData: UserData[]
  loading: boolean
}

const initialState: UserState = {
  userData: [],
  loading: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.loading = false
      state.userData = action.payload
    },
    remove(state, action: PayloadAction<UserData>) {
      const { phone, email } = action.payload
      state.userData = state.userData.filter(
        (user) => user.phone !== phone && user.email !== email
      )
    }
  }
})

export const { setUserData, remove } = userSlice.actions

export default userSlice.reducer
