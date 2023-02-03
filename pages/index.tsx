import { createAction } from '@reduxjs/toolkit'
import { ReactElement } from 'react'
import { ProfileHeader } from '~~/components/Home/ProfileHeader'
import { SideBar } from '~~/components/Home/SideBar'
import { UserInfoBar } from '~~/components/Home/UserInfoBar'
import { UserMain } from '~~/components/Home/UserMain'
import { Main } from '~~/layouts/Main'
import { useAppDispatch, useAppSelector } from '~~/store/hooks'
import { fetchCollectionStart, observableFetchCollectionStart } from '~~/store/slice/collection'
import { fetchCollectionUsingThunkMiddleware } from '~~/store/thunk'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const collection = useAppSelector((state) => state.collection.data)

  const fetchSaga = () => dispatch(createAction(fetchCollectionStart.toString())())

  const fetchThunk = () => dispatch(fetchCollectionUsingThunkMiddleware())

  const fetchObservable = () => dispatch(createAction(observableFetchCollectionStart.toString())())
  return (
    <>
      <div>
        <ProfileHeader />
        <div className="bg-white px-[30px]">
          <UserInfoBar />
          <div className="mt-[20px] flex justify-between">
            <UserMain collection={collection} />
            <SideBar />
          </div>
        </div>
        <div className="fixed bottom-[100px] left-[10px] gap-[10px]">
          <button
            onClick={fetchSaga}
            className="   rounded-[15px] bg-[#3cff00] py-[10px] px-[20px]  text-[.8rem] active:bg-[#a0f]"
          >
            Saga
          </button>

          <button
            onClick={fetchThunk}
            className="  rounded-[15px] bg-[#3cff00] py-[10px] px-[20px]  text-[.8rem] active:bg-[#a0f]"
          >
            Thunk
          </button>

          <button
            onClick={fetchObservable}
            className="  rounded-[15px] bg-[#3cff00] py-[10px] px-[20px]  text-[.8rem] active:bg-[#a0f]"
          >
            Observable
          </button>
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>
}

export default Home
