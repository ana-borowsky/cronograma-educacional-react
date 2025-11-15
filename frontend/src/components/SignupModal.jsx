import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SignupModal = ({ onClose, onLoginClick }) => {
  const handleSignupClick = () => {
    onClose?.()
    onLoginClick?.()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-400/70 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-neutral-300 p-6 sm:p-10 border border-neutral-400 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <form className="space-y-4 mt-4">
          <h2
            id="modal-title"
            className="text-center text-neutral-600 text-2xl font-semibold mb-6"
          >
            Crie sua conta
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 text-neutral-600 font-bold text-sm"
            >
              Nome completo
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Seu Nome"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-neutral-600 font-bold text-sm"
            >
              E-mail
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="nome@email.com"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-neutral-600 font-bold text-sm"
            >
              Senha
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Crie uma senha forte"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block mb-1 text-neutral-600 font-bold text-sm"
            >
              Confirme a senha
            </label>
            <Input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Repita a senha"
              required
            />
          </div>

          <Button
            type="button"
            className="w-full transition duration-200"
            variant="yellow-primary"
            onClick={handleSignupClick}
          >
            Cadastrar
          </Button>
        </form>

        <p className="text-center mt-5 text-neutral-600 text-sm">
          Já tem uma conta?
          <button
            onClick={onLoginClick || onClose}
            className="ml-1 text-neutral-100 font-bold hover:underline cursor-pointer"
            type="button"
          >
            Faça login
          </button>
        </p>


      </div>
    </div>
  )
}

export default SignupModal
