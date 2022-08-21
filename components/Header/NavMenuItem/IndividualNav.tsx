import React from 'react'

interface IProps {
  title: string
}

export const IndividualNav = ({ title }: IProps): JSX.Element => {
  return <div className="flex h-full w-[103px] items-center justify-center text-[0.875rem] text-white">{title}</div>
}
