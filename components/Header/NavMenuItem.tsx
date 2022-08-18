import { NAV } from '~~/mocks/header/nav'

export const NavMenuItem = (): JSX.Element => {
  return (
    <>
      {NAV.map((item) => (
        <div key={item.id} className="flex h-full w-[103px] items-center justify-center text-white">
          {item.title}
        </div>
      ))}
    </>
  )
}
