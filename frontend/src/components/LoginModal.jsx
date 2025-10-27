import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { Input } from "@/components/ui/input"

const LoginModal = ({ onClose }) => {

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={onClose} 
    >
      <div
        className="bg-neutral-800 rounded-lg shadow-2xl w-full max-w-md border border-neutral-600 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <form className="p-8 md:p-10 space-y-4">

          <h2 id="modal-title" className="text-center text-white text-2xl font-semibold mb-6 border-b-2 border-completed-text pb-3">
            Acesso
          </h2>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-neutral-300 font-bold text-sm">
              E-mail
            </label>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="nome@email.com"
              required
              variant="dark"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-neutral-300 font-bold text-sm">
              Senha
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
              variant="dark"
            />
          </div>

          <Button
            type="button" 
            className="w-full"
            variant="yellow-primary"
            asChild 
          >
            <Link to="/scheduleandtasks">
              Entrar
            </Link>
          </Button>

        </form>

        <p className="text-center pb-8 px-8 text-neutral-400 text-sm">
          Não tem conta?
          <Link to="/signup" className="ml-1 text-white font-bold no-underline hover:underline">
            Cadastre-se
          </Link>
          <button
            onClick={onClose}
            className="block w-full mt-4 text-sm text-neutral-500 hover:text-white transition-colors"
            aria-label="Fechar Modal"
          >
            Ou fechar
          </button>
        </p>

      </div>
    </div>
  )
}

export default LoginModal