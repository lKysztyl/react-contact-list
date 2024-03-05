import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ContactState = {
  name: string
  email: string
  phone: string
}

const initialState: ContactState = {
  name: '',
  email: '',
  phone: ''
}

const newUserDataSlice = createSlice({
  name: 'newUserData',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<ContactState>) {
      state.name = action.payload.name
      state.email = action.payload.email
      state.phone = action.payload.phone
    }
  }
})

export const { setUserInfo } = newUserDataSlice.actions

export default newUserDataSlice.reducer
