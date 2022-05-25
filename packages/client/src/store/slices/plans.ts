import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
// TODO: IMPORT RECIPE TYPE

const initialState = {
  list: [],
}

const plans = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    updateList: (state, { payload }) => {
      state.list = payload
    },
  },
})

export const selectPlansList = (state: RootState) => state.plans.list

export const { updateList } = plans.actions

export default plans.reducer
