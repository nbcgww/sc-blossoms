import { configureStore } from '@reduxjs/toolkit'
import { rootReducer   } from './slice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import {createEpicMiddleware} from 'redux-observable';
import { rootEpic } from './observerable';

const sagaMiddleware = createSagaMiddleware()
const epicMiddleware = createEpicMiddleware()

const moreMiddleware = [sagaMiddleware,epicMiddleware]


export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => [...getDefaultMiddleware({thunk:true}),...moreMiddleware]
})

sagaMiddleware.run(rootSaga)
epicMiddleware.run(rootEpic)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

