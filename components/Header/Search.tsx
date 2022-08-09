import React from 'react'
import SearchIcon from '~~/assets/svgs/search-dbfe5cbb.svg'

const placeHolder = 'Search for artists, bands, tracks, podcasts'

export const Search = (): JSX.Element => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[30px] w-[300px]">
        <input type="text" className="h-full w-full rounded-md" />
        <p className="absolute top-1/2 left-[10px] -translate-y-1/2 text-[0.9rem]">{placeHolder}</p>
        <SearchIcon className="absolute top-1/2 right-[10px] -translate-y-1/2" />
      </div>
    </div>
  )
}
