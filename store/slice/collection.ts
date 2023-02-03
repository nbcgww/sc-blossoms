import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../index'
import { HYDRATE } from 'next-redux-wrapper'

// Type for our state
export interface AuthState {
  authState: boolean
}

// Initial state
const initialState = {
  data: [],
  status: 'idle',
  hasErr:''
}

// Actual Slice
export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {

    // },
  },
})

// export const {  } = collectionSlice.actions

export const selectCollectionState = (state: AppState) => state.collection.data

export default collectionSlice.reducer
