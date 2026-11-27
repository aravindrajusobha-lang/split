import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl:'https://split-2-nxps.onrender.com' }),
  tagTypes: ['Households', 'Members', 'Accounts', 'Bills', 'Splits', 'Payments', 'Predictions', 'Disputes', 'Notifications', 'Reports', 'Loyalty', 'Admin'],
  endpoints: () => ({}),
})
