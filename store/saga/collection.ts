import { put, takeEvery } from 'redux-saga/effects'



export const FECTH_COLLECTION = 'FECTH_COLLECTION'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// Our worker Saga: will perform the async increment task
export function* collectionAsync() {
//   yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchCollectionAsync() {
  yield takeEvery(FECTH_COLLECTION, collectionAsync)
}



