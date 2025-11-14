import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(

  "flex w-full rounded-md transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-neutral-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "h-12 border border-input bg-neutral-200 px-3 py-1 text-base md:text-sm",
        dark:
          "h-auto p-3 text-sm border border-neutral-600 bg-neutral-700 text-white placeholder-neutral-500 focus:ring-yellow-500 focus:border-yellow-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    const fileStyles = variant === 'dark' && type === 'file'
      ? "text-neutral-300 file:mr-3 file:py-2 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-600 file:text-white hover:file:bg-yellow-500 cursor-pointer"
      : ""

    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, className }),
          fileStyles
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }