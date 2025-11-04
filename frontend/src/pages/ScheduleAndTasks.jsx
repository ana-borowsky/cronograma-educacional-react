import { useState } from 'react'
import Layout from "../components/layout/Layout"
import NavigationBar from "../containers/NavigationBar"
import ToDoList from "../containers/schedule/ToDoList"
import Schedule from "../containers/schedule/Schedule"
import LoginModal from "../components/LoginModal"
import SignupModal from "../components/SignupModal" 
import { useLocation } from 'react-router-dom'

const ScheduleAndTasks = () => {

  const location = useLocation()

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)

  const openSignupModal = () => setIsSignupModalOpen(true)
  const closeSignupModal = () => setIsSignupModalOpen(false)

  return (
    <Layout subtitle="Cronograma Semanal">
      <NavigationBar
        currentPath={location.pathname}
        openLoginModal={openLoginModal}
        openSignupModal={openSignupModal} 
      />

      <div className="flex flex-row p-5 gap-6">
        <Schedule />
        <ToDoList />
      </div>

      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
      {isSignupModalOpen && <SignupModal onClose={closeSignupModal} />}

    </Layout>
  )
}

export default ScheduleAndTasks