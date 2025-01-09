import * as React from 'react'
import { Icons } from 'src/components/ui/icons'

// TODO: Revisit for a better spiner for page level
const Placeholder: React.FC = () => {
  return <div className="flex items-center justify-center my-20">
    <Icons.spinner className="mr-2 h-14 w-14 animate-spin" />
  </div>
}

export default Placeholder
