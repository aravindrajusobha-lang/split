import { configureStore } from '@reduxjs/toolkit'
import { api } from '../services/api'
import preferencesReducer from '../features/preferences/slice'

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer, preferences: preferencesReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
