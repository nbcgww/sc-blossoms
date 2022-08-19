import AddFollowIcon from '~~/assets/svgs/add-follow-8werkl1.svg'
import FollowIcon from '~~/assets/svgs/follow-0ahokl.svg'
import WaveIcon from '~~/assets/svgs/wave.svg'

interface IProps<T> {
  detail: {
    username: T
    follow: T
    track: number
    avatar: T
    id: T
  }
}

export const Item = ({ detail }: IProps<string>): JSX.Element => {
  return (
    <div className="mb-[10px] flex h-[61px] border-b-[1px] border-[#333]  pb-[10px] last:border-b-[0px]">
      <img src={detail.avatar} className="mr-[10px] rounded-[50%]" />
      <div className="flex-1">
        <div>
          <span>{detail.username}</span>
        </div>
        <div className="flex space-x-[15px] text-[0.8rem]">
          <div className="flex items-center space-x-[5px]">
            <FollowIcon className="w-[16px]" />
            <span>{detail.follow}</span>
          </div>
          <div className="flex items-center space-x-[5px]">
            <WaveIcon className="w-[16px]" />
            <span>{detail.track}</span>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center text-[0.8rem]">
        <button className="flex space-x-[5px] rounded-[3px]  border-[1px] border-white/20 px-[10px]">
          <AddFollowIcon className="w-[16px] fill-white" />
          <span> Follow</span>
        </button>
      </div>
    </div>
  )
}
