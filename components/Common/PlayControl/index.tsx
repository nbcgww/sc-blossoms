import { useCallback, useEffect, useRef, useState } from 'react'
import LoopIcon from '~~/assets/svgs/loop.svg'
import NextIcon from '~~/assets/svgs/next.svg'
import PauseIcon from '~~/assets/svgs/pause.svg'
import PlayIcon from '~~/assets/svgs/play.svg'
import PreviousIcon from '~~/assets/svgs/previous.svg'
import ShuffleIcon from '~~/assets/svgs/shuffle.svg'
import { TimeLine } from './TimeLine'

export const PlayControl = (): JSX.Element => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlay, setIsPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalTime, setTotalTime] = useState(0)

  useEffect(() => {
    audioRef.current = new Audio('/[YT2mp3.info] - KLYDIX - Virtual Isekai (UXN Release) (320kbps).mp3')
    audioRef.current.addEventListener('ended', () => {
      setIsPlay(false)
    })
    audioRef.current.addEventListener('loadeddata', () => {
      setTotalTime(audioRef.current?.duration ?? 0)
      console.log(audioRef.current?.duration)
    })
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current?.paused) {
        audioRef.current.play()
        setIsPlay(true)
      } else {
        audioRef.current.pause()
        setIsPlay(false)
      }
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', (e) => {
        setCurrentTime(audioRef.current?.currentTime ?? 0)
      })
    }
  }, [])

  const setTime = useCallback((value: number) => {
    if (audioRef.current) audioRef.current.currentTime = value
  }, [])

  return (
    <section className="fixed bottom-0 left-0 h-[49px] w-full border-t-[1px] border-[#cecece] bg-[#F2F2F2]">
      <div className="mx-auto flex h-full w-[1240px]">
        <div className="mr-[20px] ml-[12px] flex h-full items-center space-x-[12px]">
          <PreviousIcon />
          <div onClick={togglePlay}>
            {isPlay ? <PauseIcon className="cursor-pointer" /> : <PlayIcon className="cursor-pointer" />}
          </div>
          <NextIcon />
          <ShuffleIcon />
          <LoopIcon />
        </div>
        <TimeLine total={totalTime} current={currentTime} setTime={setTime} />
      </div>
    </section>
  )
}
