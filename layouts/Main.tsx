import { ReactElement } from 'react'
import { Header } from '~~/components/Header'

type IProps = {
  children: ReactElement
}

export const Main = ({ children }: IProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="mx-auto w-[1240px]">{children}</div>
    </>
  )
}
