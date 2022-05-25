import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
// TODO: IMPORT RECIPE TYPE

const initialState = {
  list: [],
}

const recipes = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    updateList: (state, { payload }) => {
      state.list = payload
    },
  },
})

export const selectRecipeList = (state: RootState) => state.recipes.list

export const { updateList } = recipes.actions

export default recipes.reducer
