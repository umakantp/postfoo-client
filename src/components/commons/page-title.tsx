import * as React from 'react'

interface PageTitleProps {
  title: string,
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{title}</h2>
}

export default PageTitle
