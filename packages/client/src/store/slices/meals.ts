import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
// TODO: IMPORT RECIPE TYPE

const initialState = {
  list: [],
}

const meals = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    updateList: (state, { payload }) => {
      state.list = payload
    },
  },
})

export const selectMealsList = (state: RootState) => state.meals.list

export const { updateList } = meals.actions

export default meals.reducer
