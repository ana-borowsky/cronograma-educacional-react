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
            ? 'text-yellow-600 border-t border-l border-r border-neutral-400 rounded-tl-lg rounded-tr-lg' // APENAS AQUI
            : 'text-neutral-500 hover:text-white hover:bg-neutral-500/50 hover:rounded-tl-lg hover:rounded-tr-lg'
          }
          ${!isActive && 'border-b border-transparent'} 
        `}
      >
        {icon}
        <span>{children}</span>
        {isActive && (
          <div
            className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-background z-20"
          />
        )}
      </a>
    );
  };

  return (
    <div className="w-full min-w-[1674px] flex justify-center">
      <div className="w-full border-b border-neutral-400 flex justify-center items-end">

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