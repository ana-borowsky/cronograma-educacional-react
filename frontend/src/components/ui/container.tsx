import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`bg-neutral-300 p-2 sm:p-6 border border-neutral-400 rounded-lg transition-all duration-300 flex-shrink-0 ${className}`}
    >
      {children}
    </div>
  )
}