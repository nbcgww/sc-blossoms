import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICollection } from '~~/models/collection'
import { RootState } from '../index'
import { fetchCollectionUsingThunkMiddleware } from '../thunk'

enum StatusEnum {
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
}
export interface CollectionState {
  data: ICollection[]
  status: StatusEnum
  error: any
}

const initialState: CollectionState = {
  data: [],
  status: StatusEnum.pending,
  error: {},
}

// Actual Slice
export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    fetchCollectionStart: (state) => {
      state.status = StatusEnum.pending
      state.data = []
    },

    fetchCollectionSuccess: (state, action) => {
      state.status = StatusEnum.fulfilled
      state.data = action.payload
    },

    fetchCollectionFailure: (state, action: PayloadAction<ICollection[]>) => {
      state.status = StatusEnum.rejected
      state.error = action.payload
    },
    observableFetchCollectionStart: (state) => {
      state.status = StatusEnum.pending
      state.data = []
    },

    observableFetchCollectionSuccess: (state, action) => {
      state.status = StatusEnum.fulfilled
      state.data = action.payload
    },

    observableFetchCollectionFailure: (state, action: PayloadAction<ICollection[]>) => {
      state.status = StatusEnum.rejected
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCollectionUsingThunkMiddleware.pending, (state, action) => {
      state.status = StatusEnum.pending
      state.data = []
    })
    builder.addCase(fetchCollectionUsingThunkMiddleware.fulfilled, (state, action) => {
      state.status = StatusEnum.fulfilled
      state.data = action.payload
    })
    builder.addCase(fetchCollectionUsingThunkMiddleware.rejected, (state, action) => {
      state.status = StatusEnum.rejected
      state.error = action.payload
    })
  },
})

export const selectCollectionState = (state: RootState) => state.collection.data

export const {
  fetchCollectionStart,
  observableFetchCollectionFailure,
  observableFetchCollectionStart,
  observableFetchCollectionSuccess,
  fetchCollectionSuccess,
  fetchCollectionFailure,
} = collectionSlice.actions
