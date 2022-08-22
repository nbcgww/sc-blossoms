import React, { useEffect, useRef } from 'react'

interface IProps {
  total: number
  current: number
}

export const TimeLine = ({ total, current }: IProps): JSX.Element => {
  const progressBarRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    progressBarRef.current!.style.width = `${(current / total) * 252}px`
  })
  return (
    <div className="flex h-full w-[347px] items-center space-x-[10px] text-[0.75rem]">
      <div>{(current / 60).toFixed(2)}</div>
      <div className="relative h-[2px] w-[252px] bg-[#ccc]">
        <div className="h-full w-0 bg-[#f50]" ref={progressBarRef}></div>
      </div>
      <div>{(total / 60).toFixed(2)}</div>
    </div>
  )
}
