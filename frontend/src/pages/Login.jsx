import Layout from "../components/Layout"

const Login = () => {
  return (
    <Layout subtitle="Faça seu login!">
      <div className="login-container">
        <form className="login-form">
          <h2>Acesso</h2>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
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
              placeholder="********"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <p className="signup-text">
          Não tem conta?
        </p>

      </div>
    </Layout>
  );
};

export default Login;