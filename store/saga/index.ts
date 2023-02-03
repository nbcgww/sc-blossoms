import { put, takeEvery, all } from 'redux-saga/effects'
import { watchCollectionAsync } from './collection'

export default function* rootSaga() {
  yield all([watchCollectionAsync()])
}
