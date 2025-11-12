import { useState, useEffect } from 'react'
import Layout from "../components/layout/Layout"
import NavigationBar from "../containers/NavigationBar"
import Discipline from "../containers/discipline/Discipline"
import AddDiscipline from "../containers/discipline/AddDiscipline"
import LoginModal from "../components/LoginModal"
import SignupModal from "../components/SignupModal"
import { useLocation } from 'react-router-dom'

const Disciplines = () => {
  const location = useLocation()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const [disciplines, setDisciplines] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDisciplines = async () => {
      try {
        const response = await fetch('http://localhost:8800/discipline/1');
        if (!response.ok) {
          throw new Error('Falha ao buscar dados');
        }
        const data = await response.json();
        setDisciplines(data);
      } catch (error) {
        console.error("Erro buscando disciplinas:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDisciplines();
  }, []);

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
      <NavigationBar
        currentPath={location.pathname}
        openLoginModal={openLoginModal}
        openSignupModal={openSignupModal}
      />

      <div className="flex flex-col p-5 gap-6 min-h-screen">
        <div className="w-full flex flex-col md:flex-row md:space-x-8">
          <div className="w-full flex overflow-x-auto space-x-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {isLoading ? (
              <p className="text-neutral-400">Carregando disciplinas...</p>
            ) : (
              disciplines.map((discipline) => (
                <Discipline
                  key={discipline.idDiscipline}
                  disciplineData={discipline}
                />
              ))
            )}
            <AddDiscipline startOpen={disciplines.length === 0} />
          </div>
        </div>
      </div>

      {isLoginModalOpen && (
        <LoginModal onClose={closeLoginModal} />
      )}

      {isSignupModalOpen && (
        <SignupModal
          onClose={closeSignupModal}
          onLoginClick={switchToLogin}
        />
      )}
    </Layout>
  )
}

export default Disciplines
