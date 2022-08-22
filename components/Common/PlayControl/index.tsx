import LoopIcon from '~~/assets/svgs/loop.svg'
import NextIcon from '~~/assets/svgs/next.svg'
import PlayIcon from '~~/assets/svgs/play.svg'
import PreviousIcon from '~~/assets/svgs/previous.svg'
import ShuffleIcon from '~~/assets/svgs/shuffle.svg'
import { TimeLine } from './TimeLine'

export const PlayControl = (): JSX.Element => {
  return (
    <section className="fixed bottom-0 left-0 h-[49px] w-full border-t-[1px] border-[#cecece] bg-[#F2F2F2]">
      <div className="mx-auto flex h-full w-[1240px]">
        <div className="mr-[20px] ml-[12px] flex h-full items-center space-x-[12px]">
          <PreviousIcon />
          <PlayIcon />
          <NextIcon />
          <ShuffleIcon />
          <LoopIcon />
        </div>
        <TimeLine />
      </div>
    </section>
  )
}
