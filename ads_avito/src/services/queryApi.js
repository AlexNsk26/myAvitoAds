import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL = 'http://127.0.0.1:8090/'
const DATA_TAG = { type: 'allAds', id: 'LIST' }
export const AvitoQueryApi = createApi({
  reducerPath: 'avitoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { access_token = '', token_type = '' } = JSON.parse(
        sessionStorage.getItem('tokens') ?? '{}'
      )
      console.log(access_token)
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', `${token_type} ${access_token}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    postTokensLogin: builder.query({
      query: ({ email = '', password = '' }) => ({
        url: 'auth/login',
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
    }),
    postSignUp: builder.query({
      query: (signUpData) => ({
        url: 'auth/register',
        method: 'POST',
        body: JSON.stringify({
          password: signUpData.password,
          role: 'user',
          email: signUpData.login,
          name: signUpData.firstName,
          surname: signUpData.firstLast,
          phone: '',
          city: signUpData.city,
        }),
      }),
    }),
    getAllAds: builder.query({
      query: () => ({
        url: 'ads',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
      ],
    }),
  }),
})

export const {
  usePostTokensLoginQuery,
  usePostSignUpQuery,
  useGetAllAdsQuery,
} = AvitoQueryApi
