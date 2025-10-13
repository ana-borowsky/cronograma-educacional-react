import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <Layout subtitle="Faça seu cadastro!">
      <div className="register-container">
        <form className="register-form">
          <h2>Crie sua conta</h2>

          <div className="input-group">
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu Nome"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="nome@email.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Crie uma senha forte"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirme a Senha</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Repita a senha"
              required
            />
          </div>

          <Link to="/login" className="auth-link">
            Cadastrar
          </Link>
        </form>

        <p className="login-text">
          Já tem uma conta?
        </p>

      </div>
    </Layout>
  );
};

export default Register;