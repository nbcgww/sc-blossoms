import React from 'react'

interface IProps {
  content: string
}
export const Button = ({ content }: IProps): JSX.Element => {
  return (
    <button className="flex h-[26px] items-center justify-center rounded-[3px] border-[1px] border-[#e5e5e5]  px-[10px]">
      {content}
    </button>
  )
}
