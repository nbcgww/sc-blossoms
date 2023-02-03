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
import { selectCollectionState } from '~~/store/slice/collection'

const Home: NextPageWithLayout = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const collection = useAppSelector((state)=>state.collection.data)
  useEffect(() => {
    const fetchCollectionAction = createAction(FETCH_COLLECTION_SAGA_TYPE.RECEIVED)
    console.log(fetchCollectionAction())
    dispatch(fetchCollectionAction())
  }, [dispatch])
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
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>
}

export default Home
