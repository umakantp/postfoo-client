import { Metadata } from 'next'
import * as React from 'react'
import PageTitle from 'src/components/commons/page-title'
import PortfolioForm from 'src/components/portfolio/portfolio-form'

export const metadata: Metadata = {
  title: 'Create Portfolio',
  description: 'Create a new portfolio',
}

const CreatePortfolioPage: React.FC = () => {
  return (
    <div>
      <PageTitle title="Create Portfolio" />
      <PortfolioForm />
    </div>
  )
}

export default CreatePortfolioPage
