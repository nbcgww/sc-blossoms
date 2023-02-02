export const SideBar = (): JSX.Element => {

  const textInfo = `<a>Blossoms.Asia</a> // ブロッサムズアジア
  "Serenade the world with soul capturing melodies."
  
  Send demos to:
  <a>Blossoms.Asia/demo</a>
  
  ❗️ Blossoms Asia's Usage Policy for independent content creators and their User-generated content: <a>blossoms.asia/usage-policy</a>
  
  General Inquiries:
  <a>hello@divergemusic.group</a>
  
  © 2022 Blossoms Asia / <a>DivergeMusic.Group</a>
  
  Labels from Diverge Music Group:
  @<a>divr</a>
  @<a>suh-reen</a>
  @<a>the-diversemusic</a>
  
  Partnered with UMG / Virgin Music Group`
  return (
    <div className=" h-[800px] w-[300px]  px-[20px] text-[0.9rem]">
      <div className="flex justify-between gap-[10px]">
        <div className="flex flex-1 flex-col border-r-[1px]">
          <span className="">Followers</span>
          <span className="text-[1.2rem]">2931</span>
        </div>
        <div className="flex flex-1 flex-col border-r-[1px]">
          <span>Following</span>
          <span className="text-[1.2rem]">4</span>
        </div>
        <div className="flex flex-1 flex-col">
          <span>Tracks</span>
          <span className="text-[1.2rem]">74</span>
        </div>
      </div>
      <div className="text-[.8rem] whitespace-pre-line [&__a]:text-[#49c5ff] [&__a]:font-[400]">
        <p dangerouslySetInnerHTML={{__html:textInfo}} className="leading-[1rem]"/>
      </div>
    </div>
  )
}
