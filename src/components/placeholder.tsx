import * as React from 'react'
import { Icons } from 'src/components/ui/icons'

// TODO: Revisit for a better spiner for page level
const Placeholder: React.FC = () => {
  return <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
}

export default Placeholder
