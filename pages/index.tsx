import { Header } from 'components/Header'
import { ReactElement } from 'react'
import { ProfileHeader } from '~~/components/Home/ProfileHeader'
import { UserInfoBar } from '~~/components/Home/UserInfoBar'
import { Main } from '~~/layouts/Main'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div>
        <ProfileHeader />
        <div className="px-[30px]">
          <UserInfoBar />
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>
}

export default Home
