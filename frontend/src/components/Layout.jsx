import Title from "./Title"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { useState } from 'react'
// 1. Importar o modal
import LoginModal from './LoginModal' // Assumindo que LoginModal está no mesmo diretório ou em ./LoginModal

const Layout = ({ subtitle, children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)

  return (
    <div className="flex flex-col w-screen min-w-[320px] min-h-[100vh]">

      <header className="relative w-full p-5 flex justify-center items-start">
        {/* ... (cabeçalho) ... */}
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
          <Button asChild
            variant="secondary"
          >
            <Link to="/signup">
              Cadastro
            </Link>
          </Button>

          <Button
            variant="default" 
            onClick={openLoginModal} // Este botão abre o modal
          >
            Login
          </Button>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center flex-grow p-5">
        {children}
      </main>
      
      {/* 2. SUBSTITUIR o placeholder pela chamada do LoginModal */}
      {isLoginModalOpen && (
        <LoginModal onClose={closeLoginModal} />
      )}
    </div>
  )
}

export default Layout