import { combineReducers } from "@reduxjs/toolkit";
import { collectionSlice } from './collection';

export const rootReducer = combineReducers({
    collection: collectionSlice.reducer,
})