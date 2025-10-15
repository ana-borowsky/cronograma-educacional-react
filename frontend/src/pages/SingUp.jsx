  import { Button } from "@/components/ui/button";
import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const SingUp = () => {
  return (
    <Layout subtitle="Faça seu cadastro!">
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-5">

        <form className="bg-neutral-800 p-8 md:p-10 rounded-lg shadow-2xl w-full max-w-md border border-neutral-600">

          <h2 className="text-center text-white text-2xl font-semibold mb-6 border-b-2 border-neutral-500 pb-3">
            Crie sua conta
          </h2>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-neutral-300 font-bold text-sm">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu Nome"
              required
              className="w-full p-2 border border-neutral-600 rounded-md box-border text-base bg-neutral-700 text-white focus:outline-none focus:border-neutral-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-neutral-300 font-bold text-sm">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="nome@email.com"
              required
              className="w-full p-2 border border-neutral-600 rounded-md box-border text-base bg-neutral-700 text-white focus:outline-none focus:border-neutral-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 text-neutral-300 font-bold text-sm">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Crie uma senha forte"
              required
              className="w-full p-2 border border-neutral-600 rounded-md box-border text-base bg-neutral-700 text-white focus:outline-none focus:border-neutral-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirm-password" className="block mb-1 text-neutral-300 font-bold text-sm">
              Confirme a Senha
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Repita a senha"
              required
              className="w-full p-2 border border-neutral-600 rounded-md box-border text-base bg-neutral-700 text-white focus:outline-none focus:border-neutral-500"
            />
          </div>

          <Button className="w-full" asChild>
            <Link to="../login">
              Cadastrar
            </Link>
          </Button>
        </form>

        <p className="text-center mt-5 text-neutral-400 text-sm">
          Já tem uma conta?
          <Link to="/login" className="ml-1 text-neutral-300 font-bold no-underline hover:underline">
            Faça login
          </Link>
        </p>

      </div>
    </Layout>
  );
};

export default SingUp;