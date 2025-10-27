const NavigationBar = () => {
  return (
    <div className="w-full p-4 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg flex flex-row gap-4">
      <a href="/scheduleandtasks" className="flex items-center gap-3 p-3 rounded-md text-neutral-300 hover:bg-neutral-700 hover:text-white transition duration-200">
        <span role="img" aria-label="Cronograma">📅</span>
        <span className="font-semibold text-sm">Cronograma</span>
      </a>
      <a href="/disciplines" className="flex items-center gap-3 p-3 rounded-md bg-neutral-700 text-white border-b-4 border-neutral-500">
        <span role="img" aria-label="Disciplinas">📋</span>
        <span className="font-semibold text-sm">Disciplinas</span>
      </a>
    </div>
  )
}

export default NavigationBar