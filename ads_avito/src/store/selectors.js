import { createSelector } from '@reduxjs/toolkit'
import { AvitoQueryApi } from '../services/queryApi'

const apiSelectorGetAllAds = AvitoQueryApi.endpoints.getAllAds.select()
 export const getAllAdsSelector = createSelector(
  apiSelectorGetAllAds,
  (result = []) => result?.data
)
export const apiSelectorGetAdsById = (state,idAds) =>
  AvitoQueryApi.endpoints.getAdsById.select(idAds)(state)
