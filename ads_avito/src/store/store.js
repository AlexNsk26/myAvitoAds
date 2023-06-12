import { configureStore } from '@reduxjs/toolkit'
import { AvitoQueryApi } from '../services/queryApi'

export const store = configureStore({
  reducer: {
    [AvitoQueryApi.reducerPath]: AvitoQueryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AvitoQueryApi.middleware),
})
