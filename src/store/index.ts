import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/fakeAPI'
import newContactReducer from './reducers/infoUser'

const store = configureStore({
  reducer: {
    user: userReducer,
    newContact: newContactReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
