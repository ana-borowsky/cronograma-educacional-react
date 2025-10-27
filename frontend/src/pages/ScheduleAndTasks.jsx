import { useState } from 'react'
import Layout from "../components/Layout"
import NavigationBar from "../containers/NavigationBar"
import ToDoList from "../containers/ToDoList"
import Schedule from "../containers/Schedule"
import LoginModal from "../components/LoginModal" 

const ScheduleAndTasks = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)

  return (
    <Layout subtitle="Cronograma Semanal">
      <NavigationBar openLoginModal={openLoginModal} />

      <div className="flex flex-row p-5 gap-6">
        <Schedule />
        <ToDoList />
      </div>

      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}

    </Layout>
  )
}

export default ScheduleAndTasks