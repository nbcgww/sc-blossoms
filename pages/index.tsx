import { ReactElement, useEffect } from 'react'
import { ProfileHeader } from '~~/components/Home/ProfileHeader'
import { SideBar } from '~~/components/Home/SideBar'
import { UserInfoBar } from '~~/components/Home/UserInfoBar'
import { UserMain } from '~~/components/Home/UserMain'
import { Main } from '~~/layouts/Main'
import { NextPageWithLayout } from './_app'
import { useAppDispatch, useAppSelector } from '~~/store/hooks'
import { createAction } from '@reduxjs/toolkit'
import { FETCH_COLLECTION_SAGA_TYPE } from '~~/store/saga/collection'
import { useSelector } from 'react-redux'
import { fetchCollectionStart, selectCollectionState } from '~~/store/slice/collection'

const Home: NextPageWithLayout = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const collection = useAppSelector((state) => state.collection.data)

  const fetch = () => dispatch(createAction(fetchCollectionStart.toString())())
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
        <button
          onClick={fetch}
          className="fixed bottom-[100px] left-[10px]   rounded-[15px] bg-[#3cff00] py-[10px] px-[20px]  text-[.8rem] active:bg-[#a0f]"
        >
          Fetch collection
        </button>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>
}

export default Home
