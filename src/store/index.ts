import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/fakeAPI'
import formReducer from './reducers/infoUser'

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
