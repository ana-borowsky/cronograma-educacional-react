const ToDoList = () => {
  return (

    <div className="flex-grow p-6 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <button className="text-white p-2 rounded-full hover:bg-neutral-700 transition duration-200">
          <span role="img" aria-label="Anterior">◀️</span>
        </button>
        <h2 className="text-2xl font-bold text-white">Terça-feira, 15 de Outubro</h2>
        <button className="text-white p-2 rounded-full hover:bg-neutral-700 transition duration-200">
          <span role="img" aria-label="Próximo">▶️</span>
        </button>
      </div>
      <div className="mb-8 p-4 bg-neutral-700 rounded-lg border border-neutral-600">
        <div className="h-2 bg-neutral-600 rounded-full mb-1">
          <div className="h-2 bg-green-500 rounded-full" style={{ width: '40%' }}></div>
        </div>
        <p className="text-neutral-300 text-sm font-medium">4 de 10 Horas Concluídas</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-green-500 hover:border-neutral-500 transition duration-200">
          <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">08:00 - 09:00</span>
          <span className="text-white flex-grow ml-4">Preparação para a aula de Programação</span>
          <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
        </div>
        <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-yellow-600 hover:border-neutral-500 transition duration-200">
          <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">09:00 - 10:00</span>
          <span className="text-white flex-grow ml-4">Revisar Capítulo 3 de Cálculo I</span>
          <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
        </div>
        <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-red-600 hover:border-neutral-500 transition duration-200">
          <span className="w-24 text-neutral-500 font-medium text-sm line-through flex-shrink-0">10:00 - 12:00</span>
          <span className="text-neutral-500 flex-grow ml-4 line-through">Estudar para a prova de Física Experimental</span>
          <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" checked readOnly />
        </div>
        <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-blue-600 hover:border-neutral-500 transition duration-200">
          <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">13:00 - 15:00</span>
          <span className="text-white flex-grow ml-4">Reunião de grupo para Projeto Final</span>
          <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
        </div>
        <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-yellow-600 hover:border-neutral-500 transition duration-200">
          <span className="w-24 text-neutral-500 font-medium text-sm line-through flex-shrink-0">15:00 - 17:00</span>
          <span className="text-neutral-500 flex-grow ml-4 line-through">Redigir a primeira seção do relatório de Cálculo</span>
          <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" checked readOnly />
        </div>
        <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-green-500 hover:border-neutral-500 transition duration-200">
          <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">19:00 - 21:00</span>
          <span className="text-white flex-grow ml-4">Aula de Introdução à Programação (Lab Inf 3)</span>
          <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
        </div>
        <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-blue-600 hover:border-neutral-500 transition duration-200">
          <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">21:00 - 22:00</span>
          <span className="text-white flex-grow ml-4">TDE 1</span>
          <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default ToDoList