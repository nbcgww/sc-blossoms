import { clsx } from 'clsx'
import { useCallback, useState } from 'react'
import Link from 'next/link'

enum TabEnum {
  All,
  PopularTracks,
  Tracks,
  Albums,
  Playlists,
  Reports,
}

const mocks = [
  { id: 1, title: 'All', tab: TabEnum.All, url: '' },
  {
    id: 2,
    title: 'Popular tracks',
    tab: TabEnum.PopularTracks,
    url: 'popular-tracks',
  },
  { id: 3, title: 'Tracks', tab: TabEnum.Tracks, url: 'tracks' },
  { id: 4, title: 'Albums', tab: TabEnum.Albums, url: 'albums' },
  { id: 5, title: 'Playlists', tab: TabEnum.Playlists, url: 'playlists' },
  { id: 6, title: 'Reports', tab: TabEnum.Reports, url: 'reports' },
]

export const ProfileTabs = (): JSX.Element => {
  const [selected, setSelected] = useState(TabEnum.All)

  const selectTab = useCallback((tab: TabEnum) => {
    setSelected((prev) => tab)
  }, [])

  return (
    <ul className="flex font-[400]">
      {mocks.map((i) => (
        <li
          key={i.id}
          className={clsx(
            'mx-[12px] h-full cursor-pointer text-[1.125rem]  first:mr-[12px] first:ml-[0px] last:mr-[0px] hover:border-b-[2px] hover:border-black',
            selected === i.tab && 'border-b-[2px] border-[#f50] text-[#f50]'
          )}
          onClick={() => selectTab(i.tab)}
        >
          <Link href={i.url} passHref>
            <a className="block h-full">{i.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
