import axios from 'axios'
import { Epic, combineEpics, ofType } from 'redux-observable'
import { Observable, from, mergeMap, observable } from 'rxjs'
import { APP_API } from '~~/api'
import { of, map, pipe } from 'rxjs'
import { observableFetchCollectionStart, observableFetchCollectionSuccess } from '../slice/collection'

const fetchCollectionEpic: Epic = (action$: Observable<any>) =>
  action$.pipe(
    ofType(observableFetchCollectionStart.toString()),
    mergeMap((action) => from(axios.get(APP_API.collection)).pipe(map((response) => observableFetchCollectionSuccess(response!.data))))
  )

export const rootEpic = combineEpics(fetchCollectionEpic)
