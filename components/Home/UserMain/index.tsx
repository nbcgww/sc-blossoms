/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import moment from 'moment'
import { useRef } from 'react'
import { ICollection } from '~~/models/collection'

interface IProps {
  collection: ICollection[]
}

export const UserMain = ({ collection }: IProps): JSX.Element => {
  const artworkRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  return (
    <div className=" w-[850px] ">
      <ul>
        {collection.map(
          (
            {
              artwork_url,
              visuals,
              user,
              title,
              last_modified,
              genre,
              likes_count,
              reposts_count,
              playback_count,
              comment_count,
            },
            idx
          ) => (
            <li key={idx} className="mb-[30px]  flex w-full last:mb-0">
              <img className="h-[160px] w-[160px] bg-cover" src={artwork_url.replace('large', 't200x200')} alt="" />
              <div className="relative ml-[5px] h-full flex-1">
                <img
                  className="h-[160px] w-full  bg-cover bg-center object-cover"
                  src={visuals.visuals[0].visual_url}
                  alt=""
                />
                <div className="absolute top-[10px] left-[10px] flex gap-[20px]">
                  <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#ff8420] [&>svg]:scale-125">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="14px" viewBox="0 0 8 14" version="1.1">
                      <title>Play 28</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="buttons" transform="translate(-1653.000000, -890.000000)" fill="#FFFFFF">
                          <path d="M1653,904 L1654.84615,897 L1653,890 L1661,897 L1653,904 Z" id="Play-28" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <p className="bg-black/60 px-[10px] text-[.8rem] text-white">{user.username}</p>
                    <p className="bg-black/60 px-[10px] text-white ">{title}</p>
                  </div>
                </div>
                <div className="absolute top-[10px] right-[10px] flex flex-col items-end gap-[3px] text-[.8rem] text-white">
                  <div>{moment(last_modified).fromNow()}</div>
                  <div className="rounded-[10px] bg-[#a8a8a8] py-[4px] px-[10px] leading-[.8rem]"> # {genre}</div>
                </div>
                <div className="mt-[10px]  flex h-[30px] border-[1px] bg-[#dddddd91] p-[4px]">
                  <div className="aspect-square h-full w-auto bg-gradient-to-tr from-[#9ee728] to-[#0bdbe2]"></div>
                  <input
                    placeholder="Write a comment"
                    className="w-full pl-[8px] placeholder:text-[.8rem]"
                    type="text"
                  />
                </div>
                <div className="mt-[10px] flex justify-between text-[.8rem]">
                  <div className="flex gap-[8px]">
                    <div className="flex h-[26px] items-center justify-center  gap-[8px] rounded-[5px] border-[1px] px-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 16 16"
                        version="1.1"
                      >
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g id="Page-1" stroke="none" fill="none">
                          <path
                            d="M10.8049818,3 C8.78471579,3 8.00065285,5.34486486 8.00065285,5.34486486 C8.00065285,5.34486486 7.21296387,3 5.19604494,3 C3.49431318,3 1.748374,4.09592694 2.03008996,6.51430532 C2.37372765,9.46673775 7.75491917,12.9928738 7.99310958,13.0010557 C8.23129998,13.0092378 13.7309828,9.2785378 13.981459,6.5012405 C14.1878647,4.20097023 12.5067136,3 10.8049818,3 Z"
                            id="Imported-Layers"
                            fill="rgb(34, 34, 34)"
                          />
                        </g>
                      </svg>
                      {likes_count}
                    </div>
                    <div className="flex h-[26px] items-center justify-center  gap-[8px] rounded-[5px] border-[1px] px-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 16 16"
                        version="1.1"
                      >
                        <title>stats_repost</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g id="Page-1" stroke="none">
                          <g id="repost-" fill="rgb(34, 34, 34)">
                            <path
                              d="M2,6 L2,11.000385 C2,12.1047419 2.90195036,13 4.0085302,13 L10.9957349,13 L10.9957349,13 L10,13 L10,13 L8,11 L4,11 L4,6 L3.5,6 L6,6 L3,3 L0,6 L2,6 L2,6 Z M6,3 L5.0042651,3 L11.9914698,3 C13.0980496,3 14,3.89525812 14,4.99961498 L14,10 L12,10 L12,5 L8,5 L6,3 Z M16,10 L10,10 L13,13 L16,10 Z"
                              id="Rectangle-43"
                            />
                          </g>
                        </g>
                      </svg>
                      {reposts_count}
                    </div>
                    <div className="flex h-[26px] items-center justify-center  gap-[8px] rounded-[5px] border-[1px] px-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 16 16"
                        version="1.1"
                      >
                        <title>share</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g id="Page-1" stroke="none">
                          <g id="share">
                            <path
                              d="M12,3 C8.03216553,3 7,4.8 7,7.8 C8.64221191,4.79999995 11.1574707,5.00518801 12,5.00518799 L12,3 Z M12,1 L12,7 L15,4 L12,1 Z"
                              id="Fill-2"
                              fill="rgb(34, 34, 34)"
                            />
                            <path
                              d="M14,7 L14,11.000385 C14,12.1125667 13.1007504,13 11.9914698,13 L4.0085302,13 C2.90195036,13 2,12.1047419 2,11.000385 L2,4.99961498 C2,3.88743329 2.8992496,3 4.0085302,3 L7.19964749,3 C6.60344356,3.55901688 6.15091777,4.22852852 5.81607607,5 L4,5 L4,11 L12,11 L12,9 L14,7 Z M11,5 L10.9594487,5 C10.9729863,4.9968494 10.9865035,4.99373829 11,4.9906662 L11,5 Z"
                              id="Rectangle-44"
                              fill="rgb(34, 34, 34)"
                            />
                          </g>
                        </g>
                      </svg>
                      Share
                    </div>
                    <div className="flex h-[26px] items-center justify-center  gap-[8px] rounded-[5px] border-[1px] px-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 653 361"
                        fill="none"
                      >
                        <rect width="653" height="361" fill="rgb(34, 34, 34)" fill-opacity="0.04" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M158.5 146.502L489 146.5C508.054 146.5 523.5 161.946 523.5 181C523.5 200.054 508.054 215.5 489 215.5L158.5 215.502C139.446 215.502 124 200.056 124 181.002C124 161.948 139.446 146.502 158.5 146.502Z"
                          fill="rgb(34, 34, 34)"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M123 48C123 31.4315 136.431 18 153 18H270C286.569 18 300 31.4315 300 48C300 64.5685 286.569 78 270 78H153C136.431 78 123 64.5685 123 48Z"
                          fill="rgb(34, 34, 34)"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M520 313C520 329.569 506.569 343 490 343L373 343C356.431 343 343 329.569 343 313C343 296.431 356.431 283 373 283L490 283C506.569 283 520 296.431 520 313Z"
                          fill="rgb(34, 34, 34)"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M123 313C123 296.431 136.431 283 153 283H270C286.569 283 300 296.431 300 313C300 329.569 286.569 343 270 343H153C136.431 343 123 329.569 123 313Z"
                          fill="rgb(34, 34, 34)"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M520 48C520 64.5685 506.569 78 490 78L373 78C356.431 78 343 64.5685 343 48C343 31.4314 356.431 18 373 18L490 18C506.569 18 520 31.4315 520 48Z"
                          fill="rgb(34, 34, 34)"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M162.5 78C105.891 78 60 123.891 60 180.5C60 237.109 105.891 283 162.5 283C179.069 283 192.5 296.431 192.5 313C192.5 329.569 179.069 343 162.5 343C72.7537 343 0 270.246 0 180.5C0 90.7537 72.7537 18 162.5 18C179.069 18 192.5 31.4315 192.5 48C192.5 64.5685 179.069 78 162.5 78Z"
                          fill="rgb(34, 34, 34)"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M486.5 283C543.109 283 589 237.109 589 180.5C589 123.891 543.109 78 486.5 78C469.931 78 456.5 64.5685 456.5 48C456.5 31.4314 469.931 18 486.5 18C576.246 18 649 90.7537 649 180.5C649 270.246 576.246 343 486.5 343C469.931 343 456.5 329.569 456.5 313C456.5 296.431 469.931 283 486.5 283Z"
                          fill="rgb(34, 34, 34)"
                        />
                      </svg>
                      Copy Link
                    </div>
                    <div className="flex h-[26px] items-center justify-center  gap-[8px] rounded-[5px] border-[1px] px-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="4px"
                        viewBox="0 0 14 4"
                        version="1.1"
                      >
                        <title>more</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="rgb(34, 34, 34)" fill-rule="evenodd">
                          <circle cx="2" cy="2" r="2" />
                          <circle cx="7" cy="2" r="2" />
                          <circle cx="12" cy="2" r="2" />
                        </g>
                      </svg>
                      More
                    </div>
                  </div>
                  <div className="flex gap-[8px]">
                    <div className="flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 16 16"
                        version="1.1"
                      >
                        <title>stats_play 4</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="stats_play-" fill="rgb(153, 153, 153)">
                            <path d="M4,13 L4,3 L13,8 L4,13 Z" id="stats_play-3" />
                          </g>
                        </g>
                      </svg>
                      {playback_count}
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 16 16"
                        version="1.1"
                      >
                        <title>stats_comment</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="stats_comment" fill="rgb(153, 153, 153)">
                            <path
                              d="M4.99961498,3 C3.89525812,3 3,3.88655484 3,5.00591905 L3,7.99408095 C3,9.10191945 3.88743329,10 4.99961498,10 L11.000385,10 C12.1047419,10 13,9.11344516 13,7.99408095 L13,5.00591905 C13,3.89808055 12.1125667,3 11.000385,3 L4.99961498,3 Z M5,10 L5,13 L8,10 L5,10 Z"
                              id="Rectangle-42"
                            />
                          </g>
                        </g>
                      </svg>
                      {comment_count}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
