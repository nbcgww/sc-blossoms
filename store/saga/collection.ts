import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { APP_API } from '~~/api';



export const FETCH_COLLECTION_SAGA_TYPE = {
  RECEIVED:  'FETCH_COLLECTION_RECEIVED',
  SUCCESS: 'FETCH_COLLECTION_SUCCESS',
  FAILURE : 'FECTH_COLLECTION_FAILURE'
}
// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// Our worker Saga: will perform the async increment task
export function* collectionAsync():any {
//   yield delay(1000)
  console.log("HEHE");
  try{

    const {data} = yield call(axios.get,APP_API.collection)
    yield put({type:FETCH_COLLECTION_SAGA_TYPE.SUCCESS,payload:data})
    console.log("DATA",data);
  }
  catch(error){
    yield put({ type: FETCH_COLLECTION_SAGA_TYPE.FAILURE, payload:error })

  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchCollectionAsync() {
  yield takeEvery(FETCH_COLLECTION_SAGA_TYPE.RECEIVED, collectionAsync)
}



