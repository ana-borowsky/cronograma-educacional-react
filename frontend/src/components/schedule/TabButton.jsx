export const TabButton = ({ tabId, children, activeTab, setActiveTab }) => {
  const isActive = activeTab === tabId;

  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`
        relative z-10 text-lg font-bold px-4 pt-3 pb-2 transition duration-200 ease-in-out cursor-pointer
        ${isActive
          ? 'text-yellow-400 bg-neutral-800 border-t border-l border-r border-yellow-400/50 rounded-t-lg border-b-2'
          : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50 border-b border-transparent'
        }
      `}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-neutral-800 z-20" aria-hidden="true"></span>
      )}
    </button>
  )
}