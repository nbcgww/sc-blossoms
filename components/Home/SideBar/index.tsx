export const SideBar = (): JSX.Element => {
  const textInfo = `
  <a>Blossoms.Asia</a>
  "Serenade the world with soul capturing melodies."
  
  Send demos to:
  <a>blossoms.asia/demo</a>
  or via email: <a>blossomsasiamusic@gmail.com</a> 
  
  General Inquiries:
  <a>hello@divergemusic.group</a>
  
  <a>© 2024 Blossoms Asia</a>
  Division of Diversity Recordings

  Partnered with UMG / Virgin Music Group`
  return (
    <div className=" h-[800px] w-[300px]  px-[20px] text-[0.9rem]">
      <div className="flex justify-between gap-[10px]">
        <div className="flex flex-1 flex-col border-r-[1px]">
          <span className="">Followers</span>
          <span className="text-[1.2rem]">3,136</span>
        </div>
        <div className="flex flex-1 flex-col border-r-[1px]">
          <span>Following</span>
          <span className="text-[1.2rem]">5</span>
        </div>
        <div className="flex flex-1 flex-col">
          <span>Tracks</span>
          <span className="text-[1.2rem]">77</span>
        </div>
      </div>
      <div className="whitespace-pre-line text-[.8rem] [&__a]:font-[400] [&__a]:text-[#49c5ff]">
        <p dangerouslySetInnerHTML={{ __html: textInfo }} className="leading-[1rem]" />
      </div>
    </div>
  )
}
