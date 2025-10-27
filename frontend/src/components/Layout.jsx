import Title from "./Title"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal' 

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

      <header className="relative w-full p-5 flex justify-center items-start">
        <div className="flex flex-col items-center">
          <Title>
            Beezer
          </Title>
          <h3 className="text-xl md:text-2xl font-medium text-neutral-400 mb-5 tracking-wide 
                      drop-shadow-sm">
            {subtitle}
          </h3>
        </div>

        <div className="absolute top-5 right-5 space-x-4">
          <Button
            variant="secondary"
            onClick={openSignupModal} 
          >
            Cadastro
          </Button>

          <Button
            variant="default"
            onClick={openLoginModal}
          >
            Login
          </Button>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center flex-grow p-5">
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