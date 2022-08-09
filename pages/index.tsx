import { Header } from 'components/Header'
import { NextPage } from 'next'
import { ProfileHeader } from '~~/components/Home/ProfileHeader'

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <div>
        <Header />
        <ProfileHeader />
      </div>
    </>
  )
}

export default Home
