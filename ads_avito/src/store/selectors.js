import { createSelector } from '@reduxjs/toolkit'
import { AvitoQueryApi } from '../services/queryApi'

const apiSelectorPostTokensLogin =
  AvitoQueryApi.endpoints.postTokensLogin.select()
export const postTokensLoginErrors = createSelector(
  apiSelectorPostTokensLogin,
  (loginResult) => loginResult?.error ?? []
)
AvitoQueryApi.endpoints.postTokensLogin.initiate()