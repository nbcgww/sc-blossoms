import { ReactElement } from 'react'
import { PlayControl } from '~~/components/Common/PlayControl'
import { Header } from '~~/components/Header'

type IProps = {
  children: ReactElement
}

export const Main = ({ children }: IProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="mx-auto w-[1240px]">{children}</div>
      <PlayControl />
    </>
  )
}
