import { useState } from 'react'
import Layout from "../components/Layout"
import NavigationBar from "../containers/NavigationBar"
import Discipline from "../containers/Discipline"
import AddDiscipline from "../containers/AddDiscipline"
import LoginModal from "../components/LoginModal"
import SignupModal from "../components/SignupModal"
// 🚨 Importações adicionadas:
import { WorkFormModal } from "@/components/WorkFormModal"
import { ExamFormModal } from "@/components/ExamFormModal"

const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
const ChevronUp = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>

const Disciplines = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const openLoginModal = () => {
    setIsSignupModalOpen(false)
    setIsLoginModalOpen(true)
  }
  const closeLoginModal = () => setIsLoginModalOpen(false)

  const openSignupModal = () => {
    setIsLoginModalOpen(false)
    setIsSignupModalOpen(true)
  }
  const closeSignupModal = () => setIsSignupModalOpen(false)

  const switchToLogin = () => {
    closeSignupModal()
    openLoginModal()
  }

  return (
    <Layout subtitle="Visão Geral das Disciplinas">
      <div className="flex flex-col p-5 gap-6">
        <NavigationBar
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
        />
        <div className="w-full flex flex-col md:flex-row md:space-x-8">
          <div className="w-full flex overflow-x-auto space-x-6 pb-4">
            {/* O WorkFormModal e ExamFormModal devem ser renderizados dentro de Discipline, 
               como você já fez no código anterior, para que eles acessem o estado correto de cada card de disciplina. */}
            <Discipline />
            <Discipline />
            <Discipline />
            <Discipline />
            <AddDiscipline />
          </div>
        </div>
      </div>

      {isLoginModalOpen && (
        <LoginModal
          onClose={closeLoginModal}
        />
      )}

      {isSignupModalOpen && (
        <SignupModal
          onClose={closeSignupModal}
          onLoginClick={switchToLogin}
        />
      )}

      {/* NOTA: Se você estivesse renderizando os modais aqui, ficaria assim:
         <WorkFormModal
           isOpen={...} 
           onClose={...} 
         /> 
         <ExamFormModal
           isOpen={...} 
           onClose={...} 
         /> 
      */}
    </Layout>
  )
}

export default Disciplines