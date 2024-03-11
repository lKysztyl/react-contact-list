import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

export interface Form {
  name?: string
  email?: string
  phone?: string
}

export interface FormState {
  forms: Form[]
}

const initialState: FormState = {
  forms: []
}

const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormContact(state, action: PayloadAction<Form>) {
      state.forms.push(action.payload)
    },
    remove(state, action: PayloadAction<Form>) {
      const { phone, email } = action.payload
      state.forms = state.forms.filter(
        (form) => form.phone !== phone && form.email !== email
      )
    },
    edit(state, action: PayloadAction<Form>) {
      return produce(state, (draftState) => {
        const indexContacts = draftState.forms.findIndex(
          (contact) => contact.phone === action.payload.phone
        )
        if (indexContacts >= 0) {
          draftState.forms[indexContacts] = action.payload
        }
      })
    }
  }
})

export const { setFormContact, remove, edit } = FormSlice.actions

export default FormSlice.reducer
