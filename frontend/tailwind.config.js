import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <Layout subtitle="Faça seu login!">
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-5">

        <form className="bg-panel-bg p-8 md:p-10 rounded-lg shadow-2xl w-full max-w-sm border border-panel-border">

          <h2 className="text-center text-text-light text-2xl font-semibold mb-6 border-b-2 border-completed-text pb-3">
            Acesso
          </h2>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-text-medium font-bold text-sm">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="nome@email.com"
              required
              className="w-full p-2 border border-panel-border rounded-md box-border text-base bg-input-bg text-text-light focus:outline-none focus:border-text-dark"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-text-medium font-bold text-sm">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
              className="w-full p-2 border border-panel-border rounded-md box-border text-base bg-input-bg text-text-light focus:outline-none focus:border-text-dark"
            />
          </div>

          <Link
            to="/roomschedule"
            // Classe que garante que o Link se pareça com um botão, usando os estilos definidos em @layer components
            className="w-full block mt-5 btn-base"
          >
            Entrar
          </Link>

        </form>

        <p className="text-center mt-5 text-text-dark text-sm">
          Não tem conta?
          <Link
            to="/signup"
            className="ml-1 text-text-medium font-bold hover:underline"
          >
            Cadastre-se
          </Link>
        </p>

      </div>
    </Layout>
  );
};

export default Login;