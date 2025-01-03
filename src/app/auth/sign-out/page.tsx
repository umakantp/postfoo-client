'use client'

import * as React from 'react'
import { useAuth } from 'src/components/auth-provider'
import { Spinner } from 'src/components/ui/spinner'
import { routes } from 'src/utils/constants'
import { hardRedirect } from 'src/utils/history'

const Page: React.FC = () => {
  const auth = useAuth()

  React.useEffect(() => {
    auth.setUserToken(undefined)
    auth.setUser(undefined)
    setTimeout(() => {
      // Let give it a time, so user see the feedback of something happening.
      // Hard refresh refreshes the page i.e. removes any local state.
      hardRedirect(routes.SIGNIN)
    }, 3000)
  }, [])
  return (
    <Spinner size="large" />
  )
}

export default Page
