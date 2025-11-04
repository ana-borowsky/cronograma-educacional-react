import { useState } from "react"
import { DisciplineForm } from "@/components/discipline/DisciplineForm"

const ChevronUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-neutral-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
)

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-neutral-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

export const AddDiscipline = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  return (
    <div className="w-[330px] space-y-8 mb-8 md:mb-0">
      <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl transition-all duration-300 overflow-hidden">

        <div
          className="flex justify-between items-center cursor-pointer w-full"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <h2 className="text-xl font-bold text-white border-b border-neutral-700 pb-1">
            Insira matérias
          </h2>
          {isFormVisible ? <ChevronUp /> : <ChevronDown />}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isFormVisible ? "max-h-[1300px] mt-5 pt-5" : "max-h-0"
            }`}
        >
          <DisciplineForm />
        </div>
      </div>
    </div>
  )
}

export default AddDiscipline
