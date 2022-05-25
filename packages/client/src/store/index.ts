import { configureStore } from '@reduxjs/toolkit'
import ui from './slices/ui'
import recipes from './slices/recipes'
import meals from './slices/meals'
import plans from './slices/plans'

export const store = configureStore({
  reducer: {
    ui,
    recipes,
    meals,
    plans,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
