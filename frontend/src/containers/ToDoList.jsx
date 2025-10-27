import { TaskItem } from "@/components/TaskItem"

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
        <TaskItem
          id="tarefa-1"
          timeRange="09:00 - 10:00"
          description="Revisar Capítulo 3 de Cálculo I"
          borderColor="yellow"
        />
        <TaskItem
          id="tarefa-2"
          timeRange="10:00 - 12:00"
          description="Estudar para a prova de Física Experimental"
          borderColor="red"
          defaultChecked={true}
        />
      </div>
    </div>
  )
}

export default ToDoList