import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/fakeAPI'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
