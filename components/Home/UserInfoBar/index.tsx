import { ButtonGroup } from './ButtonGroup'
import { ProfileTabs } from './ProfileTabs'

export const UserInfoBar = (): JSX.Element => {
  return (
    <div className="flex h-[50px] justify-between border-b-[1px] border-[#F2F2F2]  pt-[15px]">
      <ProfileTabs />
      <ButtonGroup />
    </div>
  )
}
