import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL || '/api/v1' }),
  tagTypes: ['Households', 'Members', 'Accounts', 'Bills', 'Splits', 'Payments', 'Predictions', 'Disputes', 'Notifications', 'Reports', 'Loyalty', 'Admin'],
  endpoints: () => ({}),
})
