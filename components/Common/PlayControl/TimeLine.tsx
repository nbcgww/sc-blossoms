import React, { useCallback, useEffect, useRef } from 'react'
import { fmtMSS } from '~~/helpers/time'

interface IProps {
  total: number
  current: number
  setTime: (e: number) => void
}

export const TimeLine = ({ total, current, setTime }: IProps): JSX.Element => {
  const innerProgressBarRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  const scrub = useCallback(
    (e: MouseEvent) => {
      setTime((e.offsetX / progressBarRef.current!.offsetWidth) * total)
    },
    [setTime, total]
  )

  useEffect(() => {
    innerProgressBarRef.current!.style.width = `${(current / total) * 252}px`
  })

  useEffect(() => {
    progressBarRef.current?.addEventListener('click', scrub)
  }, [scrub])
  return (
    <div className="flex h-full w-[347px] items-center space-x-[10px] text-[0.75rem]">
      <div>{fmtMSS(current.toFixed(0))}</div>
      <div ref={progressBarRef} className="relative h-[2px] w-[252px] cursor-pointer bg-[#ccc]">
        <div className="h-full w-0 bg-[#f50]" ref={innerProgressBarRef}></div>
      </div>
      <div>{fmtMSS(total.toFixed(0))}</div>
    </div>
  )
}
