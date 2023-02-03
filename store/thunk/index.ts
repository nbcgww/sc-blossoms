import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APP_API } from '~~/api'

export const fetchCollectionUsingThunkMiddleware = createAsyncThunk(
  'collection/fetchCollectionUsingReduxThunk',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(APP_API.collection)
      return data
    } catch (err: any) {
      if (!err.response) {
        throw err
      }
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)
