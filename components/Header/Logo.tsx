import PeaceClound from '~~/assets/svgs/peace-cloud-28ad0963.svg'

export const Logo = (): JSX.Element => {
  return (
    <div className="flex h-full w-[184px] items-center justify-center space-x-[10px] bg-black">
      <PeaceClound className="inline-block w-[55px]" />
      <span className="text-[0.95rem] font-[600] text-white ">SOUNDCLOUD</span>
    </div>
  )
}
