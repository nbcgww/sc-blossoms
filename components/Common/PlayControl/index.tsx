import { useCallback, useEffect, useRef, useState } from 'react'
import LoopIcon from '~~/assets/svgs/loop.svg'
import NextIcon from '~~/assets/svgs/next.svg'
import PlayIcon from '~~/assets/svgs/play.svg'
import PreviousIcon from '~~/assets/svgs/previous.svg'
import ShuffleIcon from '~~/assets/svgs/shuffle.svg'
import { TimeLine } from './TimeLine'
import PauseIcon from '~~/assets/svgs/pause.svg'
import { fromEvent } from 'rxjs'

export const PlayControl = (): JSX.Element => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlay, setIsPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalTime, setTotalTime] = useState(0)

  const _setTotalTime = useCallback((total: number) => {
    setTotalTime((prev) => total)
  }, [])

  const updateTime = useCallback(() => {
    _setTotalTime(audioRef.current?.duration!)
    setCurrentTime((prev) => audioRef.current?.currentTime ?? 0)
  }, [])

  useEffect(() => {
    audioRef.current!.src = '/North Rebellion - Hold Me Tight.mp3'

    fromEvent(audioRef.current!, 'timeupdate').subscribe(() => {
      updateTime()
    })
  }, [])

  const togglePlay = useCallback(() => {
    if (audioRef.current!.paused) {
      audioRef.current!.play()
      setIsPlay((prev) => true)
    } else {
      audioRef.current!.pause()
      setIsPlay((prev) => false)
    }
  }, [])

  return (
    <section className="fixed bottom-0 left-0 h-[49px] w-full border-t-[1px] border-[#cecece] bg-[#F2F2F2]">
      <div className="mx-auto flex h-full w-[1240px]">
        <div className="mr-[20px] ml-[12px] flex h-full items-center space-x-[12px]">
          <PreviousIcon />
          <div onClick={togglePlay}>{isPlay ? <PauseIcon /> : <PlayIcon />}</div>
          <NextIcon />
          <ShuffleIcon />
          <LoopIcon />
        </div>
        <TimeLine total={totalTime} current={currentTime} />
        <audio preload="auto" ref={audioRef} />
      </div>
    </section>
  )
}
