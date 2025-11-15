export const TabButton = ({ tabId, children, activeTab, setActiveTab }) => {
  const isActive = activeTab === tabId;

  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`
        relative z-10 text-lg font-bold px-4 pt-3 pb-2 transition duration-200 ease-in-out cursor-pointer
        ${isActive
          ? 'text-neutral-700 bg-neutral-300 border-t border-l border-r border-neutral-400/50 rounded-t-lg'
          : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-300/50 border-b border-transparent'
        }
      `}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-neutral-300 z-20" aria-hidden="true"></span>
      )}
    </button>
  )
}