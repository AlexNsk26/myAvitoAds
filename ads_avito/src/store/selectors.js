import { createSelector } from '@reduxjs/toolkit'
import { AvitoQueryApi } from '../services/queryApi'

const apiSelectorGetUsersAll = AvitoQueryApi.endpoints.getAllUsers.select()
export const usersCitySelector = createSelector(
  apiSelectorGetUsersAll,
  (result = []) => result?.data
)

