import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { FETCH_COLLECTION_SAGA_TYPE } from '../saga/collection'
import { ICollection } from '~~/models/collection'

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
    [FETCH_COLLECTION_SAGA_TYPE.RECEIVED]: (state) => {
      state.status = StatusEnum.pending
    },
    [FETCH_COLLECTION_SAGA_TYPE.SUCCESS]: (state, action:PayloadAction<ICollection[]>) => {
      console.log({action})
      state.data = action.payload
      state.status = StatusEnum.fulfilled
    },
  },
})

export const selectCollectionState = (state: RootState) => state.collection.data

