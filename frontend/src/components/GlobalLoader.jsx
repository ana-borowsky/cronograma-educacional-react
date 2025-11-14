import Lottie from "lottie-react"
import loadingAnimation from "@/animations/loading.json"

export function GlobalLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-[9999]">
      <Lottie
        animationData={loadingAnimation}
        loop
        className="w-40 h-40"
      />
    </div>
  )
}
