import Title from "./Title"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { Input } from "@/components/ui/input"

const CompLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-5">

      <form className="bg-neutral-800 p-8 md:p-10 rounded-lg shadow-2xl w-full max-w-md border border-neutral-600">

        <h2 className="text-center text-white text-2xl font-semibold mb-6 border-b-2 border-completed-text pb-3">
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
          className="w-full" 
          variant="yellow-primary"
          asChild
        >
          <Link to="../disciplines">
            Entrar
          </Link>
        </Button>

      </form>

      <p className="text-center mt-5 text-neutral-400 text-sm">
        Não tem conta?
        <Link to="/signup" className="ml-1 text-white font-bold no-underline hover:underline">
          Cadastre-se
        </Link>
      </p>

    </div>
  )
}

export default CompLogin