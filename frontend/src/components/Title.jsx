import { Link } from "react-router-dom";

const Title = ({ children }) => {
  return (
    <Link to="/">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight 
                      bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 
                      drop-shadow-lg transition-all duration-300 hover:scale-[1.01]">
          {children}
        </h1>
    </Link>


  );
};

export default Title;