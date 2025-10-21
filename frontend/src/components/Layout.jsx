import Title from "./Title";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Layout = ({ subtitle, children }) => {
  return (
    <div className="flex flex-col w-screen min-w-[320px] min-h-[100vh]">

      <header className="relative w-full p-5 flex justify-center items-start">

        <div className="flex flex-col items-center">
          <Title>
            Beezer
          </Title>
          <h3 className="text-xl md:text-2xl font-medium text-neutral-400 mb-5 tracking-wide 
                      drop-shadow-sm">
            {subtitle}
          </h3>
        </div>

        <div className="absolute top-5 right-5 space-x-4">

          <Button asChild
            className="bg-secondary text-white"
            style={{ width: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}
          >

            <Link to="/signup">
              Cadastro
            </Link>
          </Button>

          <Button asChild
            style={{ width: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}
          >
            <Link to="/login">
              Login
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center flex-grow p-5">
        {children}
      </main>

    </div>
  );
};

export default Layout;