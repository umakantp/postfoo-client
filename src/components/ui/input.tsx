import * as React from 'react'

import { cn } from 'src/utils/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'> & { startAdornment?: React.ReactNode, endAdornment?: React.ReactNode }>(
  ({ className, type, startAdornment, endAdornment, ...props }, ref) => {
    if (startAdornment || endAdornment) {
      return (
        <div className="flex items-center h-9 border border-input w-full rounded-md bg-transparent disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-base shadow-sm">
          {startAdornment && <span className="px-3 text-sm text-muted-foreground">{startAdornment}</span>}
          <input
            type={type}
            className={cn(
              'flex-1 bg-transparent px-3 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none md:text-sm',
              className
            )}
            ref={ref}
            {...props}
          />
          {endAdornment && <span className="px-3 text-sm text-muted-foreground">{endAdornment}</span>}
        </div>
      )
    }
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
