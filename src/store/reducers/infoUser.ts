import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserData } from './fakeAPI'

interface UserState {
  userData: UserData[]
}

const initialState: UserState = {
  userData: []
}

const newUserDataSlice = createSlice({
  name: 'newUserData',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserData>) {
      state.userData.push(action.payload)
    }
  }
})

export const { setUserInfo } = newUserDataSlice.actions

export default newUserDataSlice.reducer
