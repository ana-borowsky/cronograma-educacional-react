import Title from "./Title";

const Layout = ({ subtitle, children }) => {
  return (
    <div className="flex flex-col justify-center place-items-center w-screen min-w-[320px] min-h-[100vh]">
      <Title>
        Cronograma EC
      </Title>

      <h3 className="subtitle"><strong>{subtitle}</strong></h3>

      {children}

    </div>
  );
};

export default Layout;
