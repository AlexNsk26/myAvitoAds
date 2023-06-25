import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL = 'http://127.0.0.1:8090/'
const DATA_TAG_ADS = { type: 'allAds', id: 'LIST' }
const DATA_TAG_ADS_MY = { type: 'allAdsMy', id: 'LIST' }
const DATA_TAG_USERS = { type: 'allUsers', id: 'LIST' }
const DATA_TAG_COMMENTS = { type: 'commentsById', id: 'LIST' }

export const AvitoQueryApi = createApi({
  reducerPath: 'avitoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { access_token = '', token_type = '' } = JSON.parse(
        sessionStorage.getItem('tokens') ?? '{}'
      )
      //headers.set('Content-Type', 'application/json')
      headers.set('Authorization', `${token_type} ${access_token}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    postTokensLogin: builder.query({
      query: ({ email = '', password = '' }) => ({
        url: 'auth/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      }),
    }),
    postSignUp: builder.query({
      query: (signUpData) => ({
        url: 'auth/register',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    getAllUsers: builder.query({
      query: () => ({
        url: 'user/all',
        headers: { 'Content-Type': 'application/json' },
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG_USERS.type, id })),
      ],
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: 'user',
        headers: { 'Content-Type': 'application/json' },
      }),
      providesTags: 'currentUser',
    }),
    getAllAds: builder.query({
      query: () => ({
        url: 'ads',
        headers: { 'Content-Type': 'application/json' },
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG_ADS.type, id })),
      ],
    }),
    postNewAdsText: builder.query({
      query: ({ title, description, price }) => ({
        url: 'adstext',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ title, description, price }),
      }),
      providesTags: 'newAdsText',
    }),
    getAllAdsMy: builder.query({
      query: () => ({
        url: 'ads/me',
        headers: { 'Content-Type': 'application/json' },
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG_ADS_MY.type, id })),
      ],
    }),
    getAdsById: builder.query({
      query: (id) => ({
        url: `ads/${id}`,
        headers: { 'Content-Type': 'application/json' },
      }),
      providesTags: 'AdsById',
    }),
    getAllComByIdAds: builder.query({
      query: (id) => ({
        url: `ads/${id}/comments`,
        headers: { 'Content-Type': 'application/json' },
      }),
      providesTags: (result = []) => {
        console.log(result)
        return [
          ...result.map(({ id }) => ({ type: DATA_TAG_COMMENTS.type, id })),
        ]
      },
    }),
    postComByIdAds: builder.query({
      query: ({ id, text }) => ({
        url: `ads/${id}/comments`,
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ text }),
      }),
    }),
    postLoadImg: builder.mutation({
      query: ({ id, imgBin }) => {
        const fDataImg = new FormData()
        fDataImg.append('file', imgBin)
        return {
          url: `ads/${id}/image`,
          method: 'POST',
          /*            headers: {
            'Content-Type': `multipart/form-data; boundary=${Math.random()
              .toString()
              .substr(2)}`,
          }, */
          body: fDataImg,
          formData: true,
        }
      },
      // providesTags: ['newImg'],
    }),
    deleteAdsById: builder.mutation({
      query: ({ id }) => ({
        url: `ads/${id}`,
        method: 'DELETE',
      }),
      // providesTags: ['newImg'],
    }),
    patchAdsById: builder.mutation({
      query: ({ id, title, description, price }) => ({
        url: `ads/${id}`,
        headers: { 'Content-Type': 'application/json' },
        method: 'PATCH',
        body: JSON.stringify({ title, description, price }),
      }),
      //invalidatesTags: [{ type: 'AdsById' }],
    }),
  }),
})

export const {
  usePostTokensLoginQuery,
  usePostSignUpQuery,
  useGetAllAdsQuery,
  useGetAllUsersQuery,
  useGetAllAdsMyQuery,
  useGetAdsByIdQuery,
  useGetAllComByIdAdsQuery,
  usePostComByIdAdsQuery,
  usePostNewAdsTextQuery,
  usePostLoadImgMutation,
  useDeleteAdsByIdMutation,
  usePatchAdsByIdMutation,
} = AvitoQueryApi
