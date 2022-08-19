import { useEffect, useRef } from 'react'

export const UserMain = (): JSX.Element => {
  const artworkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    artworkRef.current!.style.backgroundImage = `url(https://i1.sndcdn.com/artworks-lRCzDZGG4tuqDfEV-ufueow-t200x200.jpg)`
  }, [])
  return (
    <div className=" h-[800px] w-[850px] bg-fuchsia-200">
      <ul>
        <li className="h-[197px] bg-violet-200">
          <div className="h-[160px] w-[160px]" ref={artworkRef}></div>
          <div className="ml-[5px] "></div>
        </li>
      </ul>
    </div>
  )
}
