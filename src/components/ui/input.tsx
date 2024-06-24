import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] rounded-md border border-black/80 dark:border-slate-400/70 focus:border-primary bg-transparent tracking-wide px-4 py-5 w-full text-sm placeholder:text-primary outline-none transition-all duration-500 dark:focus:border-primary dark:focus:placeholder:text-white focus:placeholder:text-black",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
