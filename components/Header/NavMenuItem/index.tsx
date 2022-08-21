import { NAV } from '~~/mocks/header/nav'
import { IndividualNav } from './IndividualNav'

export const NavMenuItem = (): JSX.Element => {
  return (
    <>
      {NAV.map((item) => (
        <IndividualNav key={item.id} title={item.title} />
      ))}
    </>
  )
}
