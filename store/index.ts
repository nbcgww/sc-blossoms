import { Action, ThunkAction, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";
import { collectionSlice } from "./slice/collection";




const sagaMiddleware = createSagaMiddleware()




const makeStore = () =>
  configureStore({
    reducer: {
      [collectionSlice.name]: collectionSlice.reducer,
    },
    devTools: true,
  });

  sagaMiddleware.run(rootSaga)


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);