import { configureStore } from '@reduxjs/toolkit'
import { rootReducer   } from './slice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => [...getDefaultMiddleware({thunk:false}),sagaMiddleware]
})

sagaMiddleware.run(rootSaga)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

