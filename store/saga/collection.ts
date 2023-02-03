import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { call, put, takeEvery,takeLeading, takeLatest ,delay} from 'redux-saga/effects'
import { APP_API } from '~~/api'
import { fetchCollectionFailure, fetchCollectionStart, fetchCollectionSuccess } from '../slice/collection'

// Our worker Saga: will perform the async increment task
export function* collectionAsync(): any {
  try {
    
    const { data } = yield call(axios.get, APP_API.collection)
    yield put({ type: fetchCollectionSuccess.toString(), payload: data })
  } catch (error) {
    yield put({ type: fetchCollectionFailure.toString(), payload: error })
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each watchCollectionAsync
export function* watchCollectionAsync() {
  yield takeLatest(fetchCollectionStart.toString(), collectionAsync)
}
