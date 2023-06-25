import { createSelector } from '@reduxjs/toolkit'
import { AvitoQueryApi } from '../services/queryApi'

const apiSelectorGetUsersAll = AvitoQueryApi.endpoints.getAllUsers.select()
export const apiSelectorGetAdsById = (state,idAds) =>
  AvitoQueryApi.endpoints.getAdsById.select(idAds)(state)
/* export const usersCitySelector = createSelector(
  apiSelectorGetUsersAll,
  (result = []) => result?.data
)
export const adsByIdSelector = createSelector(
  (state,idAds)=>apiSelectorGetAdsById,
  (result) => result.data
) */
