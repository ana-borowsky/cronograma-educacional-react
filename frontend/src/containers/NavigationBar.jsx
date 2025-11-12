import React from 'react';
import { MdCalendarMonth, MdDescription } from 'react-icons/md';
import { TabButton } from "@/components/schedule/TabButton"

const NavigationBar = ({ currentPath = "/disciplines" }) => {

  const NavTab = ({ href, children, icon }) => {
    const isActive = href === currentPath;

    return (
      <a
        href={href}
        className={`
          flex items-center justify-center gap-2 px-4 pt-3 pb-2 text-lg font-semibold
          transition duration-200 ease-in-out cursor-pointer relative z-10
          
          ${isActive
            ? 'text-yellow-400 border-t border-l border-r border-yellow-400/50 rounded-t-lg **bg-neutral-900**'
            : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
          }
          // Garante que o estado inativo se alinhe com a borda do container, MANTENDO A TRANSPARÊNCIA
          ${!isActive && 'border-b border-transparent'} 
        `}
      >
        {icon}
        <span>{children}</span>
      </a>
    );
  };

  return (
    <div className="w-full min-w-[1674px] flex justify-center">

      <div className="w-full border-b border-neutral-700 flex justify-center items-end">

        <div className="flex flex-row gap-0">
          <NavTab href="/disciplines" icon={<MdDescription className="w-5 h-5" />}>
            Disciplinas
          </NavTab>

          <NavTab href="/scheduleandtasks" icon={<MdCalendarMonth className="w-5 h-5" />}>
            Cronograma
          </NavTab>
        </div>

      </div>

    </div>
  )
}

export default NavigationBar