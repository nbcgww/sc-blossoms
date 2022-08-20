import VerifiedIcon from '~~/assets/svgs/verified.svg'
export const RightSection = () => {
  return (
    <div className="h-full flex-1">
      <div className="inline-flex h-[45px] items-center justify-center space-x-[10px] bg-black/80 px-[7px] py-[4px] text-[1.5rem] text-white">
        <span>Blossoms 🌸 Asia</span> <VerifiedIcon />
      </div>
    </div>
  )
}
