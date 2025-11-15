import Title from "./Title"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoginModal from '../LoginModal'
import SignupModal from '../SignupModal'

const Layout = ({ subtitle, children }) => {

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
    <div className="flex flex-col w-screen min-w-[320px] min-h-[100vh]">

      <header className="relative w-full">
        <div className="flex flex-col items-center min-h-[100px] justify-start mb-20 mt-20">
          <Title>
            <img
              src="/assets/logo.svg" 
              style={{ width: '600px', height: 'auto' }}
            />
          </Title>
          <h3 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
            {subtitle}
          </h3>
        </div>

        <div className="absolute top-5 right-5 space-x-4 mr-4">
          <Button
            variant="secondary"
            onClick={openSignupModal}
            className="bg-neutral-200"
          >
            Cadastro
          </Button>

          <Button
            variant="yellow-primary"
            onClick={openLoginModal}
            className="border border-neutral-400"
          >
            Login
          </Button>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center flex-grow">
        {children}
      </main>

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
    </div>
  )
}

export default Layout