import { gsap } from 'gsap'
import { useCallback, useEffect, useRef } from 'react'
import { fromEvent } from 'rxjs'
import UserIcon from '~~/assets/svgs/user-0edb86cb.svg'
import { Item } from './Item'

const mocks = [
  {
    id: '1',
    username: 'Sérene',
    follow: '332',
    track: 4,
    avatar: 'https://i1.sndcdn.com/avatars-OGQaWc28BnN3zZGL-Q2Gftg-t50x50.jpg',
  },
  {
    id: '2',
    username: 'Diversity',
    follow: '61.2k',
    track: 288,
    avatar: 'https://i1.sndcdn.com/avatars-OqT0RwFrJzbzvYVl-jh3iwA-t50x50.jpg',
  },
  {
    id: '3',
    username: 'The Diverse',
    follow: '2,904',
    track: 58,
    avatar: 'https://i1.sndcdn.com/avatars-QauUiZpQ57rUN8wl-1Gw6sA-t50x50.jpg',
  },
]

export const FeatureProfile = (): JSX.Element => {
  const featureProfileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fromEvent(featureProfileRef.current!, 'mouseover').subscribe(() => {
      onMouseOver()
    })
    fromEvent(featureProfileRef.current!, 'mouseleave').subscribe(() => {
      onMouseLeave()
    })
  }, [])

  const onMouseOver = useCallback(() => {
    gsap.to(featureProfileRef.current, {
      translateY: 0,
      duration: 0.2,
    })
  }, [])
  const onMouseLeave = useCallback(() => {
    gsap.to(featureProfileRef.current, {
      translateY: 222,
      duration: 0.2,
    })
  }, [])

  return (
    <div
      className="absolute -bottom-[0px] right-[30px]  w-[330px] translate-y-[222px] items-center bg-black/80 px-[10px] text-[0.875rem] text-white"
      ref={featureProfileRef}
    >
      <div className="mt-[6px] mb-[10px] flex h-[32px] items-center border-b-[1px] border-[#333]">
        <UserIcon className="mr-[10px] w-[15px]" />
        Featured profile
      </div>
      <div>
        {mocks.map((item) => (
          <Item key={item.id} detail={item} />
        ))}
      </div>
    </div>
  )
}
