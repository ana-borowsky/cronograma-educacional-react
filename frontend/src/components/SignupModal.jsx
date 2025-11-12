import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SignupModal = ({ onClose, onLoginClick }) => {
  const handleSignupClick = () => {
    onClose?.()
    onLoginClick?.()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-neutral-800 p-8 md:p-10 rounded-lg shadow-2xl w-full max-w-md border border-neutral-600 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <form className="space-y-4">
          <h2 id="modal-title" className="text-center text-white text-2xl font-semibold mb-6 border-b-2 border-neutral-500 pb-3">
            Crie sua conta
          </h2>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-neutral-300 font-bold text-sm">Nome Completo</label>
            <Input type="text" id="name" name="name" placeholder="Seu Nome" required variant="dark" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-neutral-300 font-bold text-sm">E-mail</label>
            <Input type="email" id="email" name="email" placeholder="nome@email.com" required variant="dark" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 text-neutral-300 font-bold text-sm">Senha</label>
            <Input type="password" id="password" name="password" placeholder="Crie uma senha forte" required variant="dark" />
          </div>

          <div className="mb-6">
            <label htmlFor="confirm-password" className="block mb-1 text-neutral-300 font-bold text-sm">Confirme a Senha</label>
            <Input type="password" id="confirm-password" name="confirm-password" placeholder="Repita a senha" required variant="dark" />
          </div>

          <Button
            type="button"
            className="w-full"
            variant="yellow-primary"
            onClick={handleSignupClick}
          >
            Cadastrar
          </Button>
        </form>

        <p className="text-center mt-5 text-neutral-400 text-sm">
          Já tem uma conta?
          <button
            onClick={onLoginClick || onClose}
            className="ml-1 text-neutral-300 font-bold no-underline hover:underline cursor-pointer"
            type="button"
          >
            Faça login
          </button>
        </p>

        <button
          onClick={onClose}
          className="block w-full mt-4 text-sm text-neutral-500 hover:text-white transition-colors"
          aria-label="Fechar Modal"
        >
          Ou fechar
        </button>
      </div>
    </div>
  )
}

export default SignupModal
