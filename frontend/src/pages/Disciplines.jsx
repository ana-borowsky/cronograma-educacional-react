import { useState, useEffect } from 'react'
import Layout from "../components/layout/Layout"
import NavigationBar from "../containers/NavigationBar"
import Discipline from "../containers/discipline/Discipline"
import AddDisciplineModal from "../components/discipline/AddDisciplineModal"
import LoginModal from "../components/LoginModal"
import SignupModal from "../components/SignupModal"
import { useLocation } from 'react-router-dom'
import { useLoading } from "@/context/LoadingContext"
import { Button } from "@/components/ui/button"

const Disciplines = () => {
  const location = useLocation()

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isAddDisciplineModalOpen, setIsAddDisciplineModalOpen] = useState(false)
  const [disciplines, setDisciplines] = useState([])

  const { isLoading, setLoading } = useLoading()

  useEffect(() => {
    fetchDisciplines()
  }, [])

  const fetchDisciplines = async () => {
    const MIN_TIME = 1000
    setLoading(true)
    const start = Date.now()

    try {
      const response = await fetch('http://localhost:8800/discipline/1')
      if (!response.ok) throw new Error()
      const data = await response.json()
      setDisciplines(data)
    } catch (error) {
      console.error(error)
    } finally {
      const elapsed = Date.now() - start
      const remaining = MIN_TIME - elapsed
      if (remaining > 0) {
        setTimeout(() => setLoading(false), remaining)
      } else {
        setLoading(false)
      }
    }
  }

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

  const openAddDisciplineModal = () => setIsAddDisciplineModalOpen(true)
  const closeAddDisciplineModal = () => setIsAddDisciplineModalOpen(false)

  const switchToLogin = () => {
    closeSignupModal()
    openLoginModal()
  }

  return (
    <Layout subtitle="Visão Geral das Disciplinas">
      <NavigationBar
        currentPath={location.pathname}
        openLoginModal={openLoginModal}
        openSignupModal={openSignupModal}
        openAddDisciplineModal={openAddDisciplineModal}
      />

      <div className="flex flex-col p-5 gap-6">
        <div className="w-full flex flex-col md:flex-row md:space-x-8">
          <div className="w-full flex overflow-x-auto space-x-6 pb-4">
            {isLoading ? (
              <p className="text-neutral-400">Carregando disciplinas...</p>
            ) : (
              disciplines.map((discipline) => (
                <Discipline
                  key={discipline.idDiscipline}
                  disciplineData={discipline}
                  onRefresh={fetchDisciplines}
                />
              ))
            )}

          </div>
        </div>    
      </div>
      <div className="w-1/5 flex-col mx-auto items-center flex justify-center transition duration-200 mt-10 mb-20">

        {disciplines.length == 0 ? <img
          src="/assets/gatinho_balao.svg"
          style={{ width: '300px', height: 'auto' }}
          className="mt-30 mb-10"
        /> : null}

        <Button
          className="w-full transition duration-200"
          variant="yellow-primary"
          onClick={openAddDisciplineModal}
        >
          Inserir disciplinas
        </Button>
      </div>

      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
      {isAddDisciplineModalOpen && <AddDisciplineModal idUser={1} onClose={closeAddDisciplineModal} onRefresh={fetchDisciplines} />}
      {isSignupModalOpen && <SignupModal onClose={closeSignupModal} onLoginClick={switchToLogin} />}
    </Layout>
  )
}

export default Disciplines
