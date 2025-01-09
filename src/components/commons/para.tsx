import * as React from 'react'

interface ParaProps {
  children: React.ReactNode,
}

const Para: React.FC<ParaProps> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-3">{children}</p>
}

export default Para
