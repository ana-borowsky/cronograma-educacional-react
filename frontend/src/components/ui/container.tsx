import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}