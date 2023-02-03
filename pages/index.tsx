import { ReactElement, useEffect } from 'react'
import { ProfileHeader } from '~~/components/Home/ProfileHeader'
import { SideBar } from '~~/components/Home/SideBar'
import { UserInfoBar } from '~~/components/Home/UserInfoBar'
import { UserMain } from '~~/components/Home/UserMain'
import { Main } from '~~/layouts/Main'
import { NextPageWithLayout } from './_app'
import { useDispatch } from 'react-redux'
import { wrapper } from '~~/store'
import axios from 'axios'
import { APP_API } from '~~/api'
import { FECTH_COLLECTION } from '~~/store/saga/collection'
import { createAction } from '@reduxjs/toolkit'

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  const fetchCollectionAction = createAction(FECTH_COLLECTION)
  console.log('fetchCollectionAction', fetchCollectionAction)
  store.dispatch(fetchCollectionAction)
  // we can set the initial state from here
  // we are setting to false but you can run your custom logic here
  // await store.dispatch(setAuthState(false))
  console.log('State on server', store.getState())
  return {
    props: {
      authState: false,
    },
  }
})

const Home: NextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div>
        <ProfileHeader />
        <div className="bg-white px-[30px]">
          <UserInfoBar />
          <div className="mt-[20px] flex justify-between">
            <UserMain />
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
