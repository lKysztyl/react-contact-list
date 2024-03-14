import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

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
    },

    edit(state, action: PayloadAction<UserData>) {
      return produce(state, (draftState) => {
        const indexContacts = draftState.userData.findIndex(
          (contact) => contact.phone === action.payload.phone
        )
        if (indexContacts >= 0) {
          draftState.userData[indexContacts] = action.payload
        }
      })
    }
  }
})

export const { setUserData, remove, edit } = userSlice.actions

export default userSlice.reducer
