import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

const initialState = {
  drawerOpen: false,
}

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    drawerOpen: (state, { payload }) => {
      state.drawerOpen = payload
    },
  },
})

export const selectDrawerOpen = (state: RootState) => state.ui.drawerOpen

export const { drawerOpen } = ui.actions

export default ui.reducer
