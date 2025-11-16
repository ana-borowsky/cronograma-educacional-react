import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

const LoginModal = ({ onClose, onSignupClick }) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log("Login submit...")
    onClose?.()
    navigate("/disciplines")
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-400/70 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-neutral-300 sm:p-10 border border-neutral-400 shadow-xl rounded-lg w-full max-w-md transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <form className="space-y-4 mt-4">
          <h2 id="modal-title" className="text-center text-neutral-600 text-2xl font-semibold mb-6">
            Acesso
          </h2>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-neutral-600 font-bold text-sm">
              E-mail
            </label>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="nome@email.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-neutral-600 font-bold text-sm">
              Senha
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
            />
          </div>

          <Button
            type="button"
            className="w-full mb-4 mt-4 transition duration-200"
            variant="yellow-primary"
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </form>

        <p className="text-center mb-2 text-neutral-600 text-sm">
          Não tem conta?
          <button
            onClick={onSignupClick}
            className="ml-1 text-neutral-100 font-bold hover:underline"
          >
            Cadastre-se
          </button>
        </p>

      </div>
    </div>
  )
}

export default LoginModal
