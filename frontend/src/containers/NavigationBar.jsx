const NavigationBar = ({ currentPath = "/disciplines" }) => {

  const NavTab = ({ href, children, icon }) => {
    const isActive = href === currentPath;

    return (
      <a
        href={href}
        className={`
          flex items-center justify-center gap-2 px-4 pt-3 pb-2 text-sm font-semibold
          transition duration-200 ease-in-out cursor-pointer relative z-10
          
          ${isActive
            ? 'text-yellow-400 bg-neutral-800 border-t border-l border-r border-yellow-400/50 rounded-t-lg border-b-2'
            : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50 border-b border-transparent'
          }
        `}
      >
        <span role="img" aria-label={href === "/scheduleandtasks" ? "Cronograma" : "Disciplinas"}>{icon}</span>
        <span>{children}</span>

        {isActive && (
          <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-neutral-800 z-20" aria-hidden="true"></span>
        )}
      </a>
    );
  };

  return (
    <div className="w-full border-b border-neutral-700 flex justify-start items-end pl-2">

      <div className="flex flex-row gap-0">
        <NavTab href="/scheduleandtasks" icon="📅">Cronograma</NavTab>
        <NavTab href="/disciplines" icon="📋">Disciplinas</NavTab>
      </div>

    </div>
  )
}

export default NavigationBar