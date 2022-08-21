import { useEffect, useRef } from 'react'

export const UserMain = (): JSX.Element => {
  const artworkRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    artworkRef.current!.style.backgroundImage = `url(https://i1.sndcdn.com/artworks-fnRYsA3NckDEIylH-GGaeGg-t200x200.jpg)`
    visualRef.current!.style.backgroundImage = `url(https://va.sndcdn.com/bg/soundcloud:tracks:1239245443/efc566f3-c275-44b3-a1a9-4eb8a361f626.jpg)`
  }, [])
  return (
    <div className=" h-[800px] w-[850px] bg-fuchsia-200">
      <ul>
        <li className="flex h-[197px] w-full bg-violet-200">
          <div className="h-[160px] w-[160px]" ref={artworkRef}></div>
          <div className="ml-[5px] h-full flex-1 bg-green-200">
            <div className="h-[160px] w-full bg-purple-300 bg-cover bg-center" ref={visualRef}></div>
          </div>
        </li>
      </ul>
    </div>
  )
}
