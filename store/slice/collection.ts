import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICollection } from '~~/models/collection'
import { RootState } from '../index'

enum StatusEnum {
  idle = 'idle',
  pending = 'pending',
  fulfilled = 'fulfilled',
}
export interface CollectionState {
  data: ICollection[]
  status: StatusEnum
}

const initialState: CollectionState = {
  data: [],
  status: StatusEnum.idle,
}

// Actual Slice
export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    fetchCollectionStart: (state, action) => {
      state.status = StatusEnum.idle
    },

    fetchCollectionSuccess: (state,action) => {
      state.status = StatusEnum.pending
      state.data = action.payload
    },

    fetchCollectionFailure: (state, action: PayloadAction<ICollection[]>) => {
      state.data = action.payload
      state.status = StatusEnum.fulfilled
    },
  },
})

export const selectCollectionState = (state: RootState) => state.collection.data

export const { fetchCollectionStart, fetchCollectionSuccess, fetchCollectionFailure } = collectionSlice.actions
