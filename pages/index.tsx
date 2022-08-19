import { ReactElement } from 'react'
import { ProfileHeader } from '~~/components/Home/ProfileHeader'
import { SideBar } from '~~/components/Home/SideBar'
import { UserInfoBar } from '~~/components/Home/UserInfoBar'
import { UserMain } from '~~/components/Home/UserMain'
import { Main } from '~~/layouts/Main'
import { NextPageWithLayout } from './_app'

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
