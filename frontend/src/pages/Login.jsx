import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <Layout subtitle="Faça seu login!">
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-5">

        <form className="bg-neutral-800 p-8 md:p-10 rounded-lg shadow-2xl w-full max-w-sm border border-neutral-600">

          <h2 className="text-center text-white text-2xl font-semibold mb-6 border-b-2 border-neutral-500 pb-3">
            Acesso
          </h2>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-neutral-300 font-bold text-sm">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="nome@email.com"
              required
              className="w-full p-2 border border-neutral-600 rounded-md box-border text-base bg-neutral-700 text-white focus:outline-none focus:border-neutral-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-neutral-300 font-bold text-sm">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
              className="w-full p-2 border border-neutral-600 rounded-md box-border text-base bg-neutral-700 text-white focus:outline-none focus:border-neutral-500"
            />
          </div>

          <Link
            to="/roomschedule"
            className="w-full block text-center py-3 mt-5 border border-transparent rounded-md bg-neutral-600 text-white text-base cursor-pointer transition duration-200 hover:bg-neutral-500"
          >
            Entrar
          </Link>

        </form>

        <p className="text-center mt-5 text-neutral-400 text-sm">
          Não tem conta?
          <Link to="/signup" className="ml-1 text-neutral-300 font-bold no-underline hover:underline">
            Cadastre-se
          </Link>
        </p>

      </div>
    </Layout>
  );
};

export default Login;