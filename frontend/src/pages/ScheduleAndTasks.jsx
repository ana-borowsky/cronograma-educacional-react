import { useState } from 'react'
import Layout from "../components/Layout"
import NavigationBar from "../containers/NavigationBar"
import ToDoList from "../containers/ToDoList"
import Schedule from "../containers/Schedule"
import LoginModal from "../components/LoginModal"
import SignupModal from "../components/SignupModal" 

const ScheduleAndTasks = () => {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)

  const openSignupModal = () => setIsSignupModalOpen(true)
  const closeSignupModal = () => setIsSignupModalOpen(false)

  return (
    <Layout subtitle="Cronograma Semanal">
      <NavigationBar
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