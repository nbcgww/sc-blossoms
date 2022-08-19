import { useEffect, useRef } from 'react'

export const LeftSection = () => {
  const avatarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    avatarRef.current!.style.backgroundImage = `url(https://i1.sndcdn.com/avatars-ahLyxpU3i32Xiep1-zoMVtQ-t200x200.jpg)`
  }, [])

  return (
    <>
      <div
        className="top-1/2 mr-[30px] inline-block	 !h-[200px] !w-[200px] bg-cover"
        ref={avatarRef}
      ></div>
    </>
  )
}
