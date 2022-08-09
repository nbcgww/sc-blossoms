import { useEffect, useRef } from 'react'
import { FeatureProfile } from './FeatureProfile'
import { LeftSection } from './LeftSection'
import { RightSection } from './RightSection'

export const ProfileHeader = (): JSX.Element => {
  const profileHeaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    profileHeaderRef.current!.style.backgroundImage = `url(https://i1.sndcdn.com/visuals-000759036190-IKYtgf-t1240x260.jpg)`
  }, [])

  return (
    <div
      className="relative mx-auto mt-[46px] h-[260px] w-[1240px] overflow-hidden p-[30px]"
      ref={profileHeaderRef}
    >
      <div className="relative flex h-full w-full justify-between">
        <LeftSection />
        <RightSection />
      </div>
      <FeatureProfile />
    </div>
  )
}
