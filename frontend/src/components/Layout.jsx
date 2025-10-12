import Title from "./Title";

const Layout = ({ subtitle, children }) => {
  return (
    <div className="container">
      <Title>
        Cronograma EC
      </Title>

      <h3 className="subtitle"><strong>{subtitle}</strong></h3>

      {children}

    </div>
  );
};

export default Layout;
