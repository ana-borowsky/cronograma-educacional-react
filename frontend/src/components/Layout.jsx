import Title from "./Title";

const Layout = ({ subtitle, children }) => {
  return (
    <div className="flex flex-col justify-center place-items-center w-screen min-w-[320px] min-h-[100vh]">
      <Title>
        Beezer
      </Title>

      <h3 className="text-xl md:text-2xl font-medium text-neutral-400 mb-10 tracking-wide 
                  drop-shadow-sm">
        
        {subtitle}
      </h3>

      {children}

    </div>
  );
};

export default Layout;
