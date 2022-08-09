import { Button } from '../Common/Button'
import { Logo } from './Logo'
import { NavMenuItem } from './NavMenuItem'
import { Search } from './Search'

export const Header = (): JSX.Element => {
  return (
    <div className="fixed top-0 h-[46px] w-full bg-[#333]">
      <div className="mx-auto flex h-full w-[1240px] items-center justify-between">
        <Logo />
        <NavMenuItem />
        <Search />
        <Button content="Sign In" />
        <Button content="Create account" />
        <p>Upload</p>
        <p>....</p>
      </div>
    </div>
  )
}
