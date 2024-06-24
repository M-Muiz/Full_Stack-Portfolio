import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] rounded-md border border-black/80 dark:border-slate-400/70 dark:focus:border-primary focus:border-primary bg-transparent tracking-wide px-4 py-5 w-full text-sm placeholder:text-primary outline-none resize-none transition-all duration-500 dark:focus:placeholder:text-white focus:placeholder:text-black",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
