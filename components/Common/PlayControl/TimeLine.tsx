import React, { useEffect, useRef } from 'react'

export const TimeLine = (): JSX.Element => {
  const progressBarRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    progressBarRef.current!.style.width = `${Math.random() * 252}px`
  })
  return (
    <div className="flex h-full w-[347px] items-center space-x-[10px] text-[0.75rem]">
      <div>0:32</div>
      <div className="relative h-[2px] w-[252px] bg-[#ccc]">
        <div className="h-full w-0 bg-[#f50]" ref={progressBarRef}></div>
      </div>
      <div>3:32</div>
    </div>
  )
}
