import { createSlice } from '@reduxjs/toolkit'

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: { activeHouseholdId: null },
  reducers: {
    setActiveHousehold(state, action) { state.activeHouseholdId = action.payload },
  },
})
export const { setActiveHousehold } = preferencesSlice.actions
export default preferencesSlice.reducer
