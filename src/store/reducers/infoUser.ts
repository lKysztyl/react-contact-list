import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FormState = {
  name: string
  email: string
  phone: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: ''
}

const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormContact(state, action: PayloadAction<FormState>) {
      state.name = action.payload.name
      state.email = action.payload.email
      state.phone = action.payload.phone
    }
  }
})

export const { setFormContact } = FormSlice.actions

export default FormSlice.reducer
