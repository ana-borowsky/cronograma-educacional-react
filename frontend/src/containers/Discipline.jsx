import { Button } from "@/components/ui/button"
import { useState } from "react"

const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
const ChevronUp = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>

const Discipline = () => {
    const [isCalcWorkFormOpen, setIsCalcWorkFormOpen] = useState(false)
    const [isCalcExamFormOpen, setIsCalcExamFormOpen] = useState(false)
  
    const [isFormVisible, setIsFormVisible] = useState(false)
  
  return (
    <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-lg flex-shrink-0 w-[312px] flex flex-col">
      <h2 className="flex items-center text-xl font-bold text-white mb-4 border-b border-neutral-700 pb-2 truncate">
        <span className="w-3 h-3 bg-yellow-600 rounded-full mr-3 flex-shrink-0"></span>
        Cálculo I
      </h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-300 mb-3">Atividades e Trabalhos</h3>
        <ul className="space-y-2 text-neutral-400 text-xs">
          <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Revisão Bibliográfica (Entrega: 05/Nov) | Duração: 5h</li>
          <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-green-600 line-through opacity-70 truncate">Estudo de Caso #1 (Concluído) | Duração: 8h</li>
          <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Lista de Exercícios 1 (Entrega: 20/Out) | Duração: 3h</li>
          <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Projeto Integrador (Entrega: 01/Dez) | Duração: 10h</li>
        </ul>
        <hr className="my-4 border-neutral-700" />
        <div
          className="flex justify-between items-center cursor-pointer p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition duration-200"
          onClick={() => setIsCalcWorkFormOpen(!isCalcWorkFormOpen)}
        >
          <p className="text-neutral-300 font-medium text-sm">Adicionar Novo Trabalho</p>
          <span className="text-neutral-300">
            {isCalcWorkFormOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
        {isCalcWorkFormOpen && (
          <form className="space-y-3 pt-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col">
              <input type="text" placeholder="Nome do Trabalho" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
            </div>
            <div className="flex flex-col">
              <input type="number" placeholder="Duração Estimada (Horas)" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="calc-t-date" className="text-neutral-400 text-xs mb-1">Data de Entrega</label>
              <input type="date" id="calc-t-date" title="Data de Entrega" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-neutral-500 text-sm" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="calc-t-file" className="text-neutral-400 text-xs mb-1">Upload do Arquivo do Trabalho</label>
              <input type="file" id="calc-t-file" name="calc-t-file" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
            </div>
            <Button type="submit" className="w-full py-2 rounded-md bg-green-700 text-white font-semibold hover:bg-green-600 transition duration-200 text-sm">+ Adicionar Trabalho</Button>
          </form>
        )}
      </div>
      <hr className="my-6 border-neutral-600" />
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-300 mb-3">Provas e Avaliações</h3>
        <ul className="space-y-2 text-neutral-400 text-xs">
          <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">P1 - Unidade 1 (Data: 15/Out)</li>
          <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">P2 - Unidade 2 (Data: 19/Nov)</li>
          <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Exame Final (Data: 10/Dez)</li>
          <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Mini-Teste Derivadas (Data: 01/Nov)</li>
        </ul>
        <hr className="my-4 border-neutral-700" />
        <div
          className="flex justify-between items-center cursor-pointer p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition duration-200"
          onClick={() => setIsCalcExamFormOpen(!isCalcExamFormOpen)}
        >
          <p className="text-neutral-300 font-medium text-sm">Adicionar Nova Prova</p>
          <span className="text-neutral-300">
            {isCalcExamFormOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
        {isCalcExamFormOpen && (
          <form className="space-y-3 pt-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col">
              <input type="text" placeholder="Nome da Prova/Avaliação" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="calc-p-date" className="text-neutral-400 text-xs mb-1">Data da Prova</label>
              <input type="date" id="calc-p-date" title="Data da Prova" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-neutral-500 text-sm" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="calc-p-file" className="text-neutral-400 text-xs mb-1">Upload de PDFs (Material)</label>
              <input type="file" id="calc-p-file" name="calc-p-file" multiple className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
            </div>
            <div className="p-3 bg-neutral-700 rounded-md border border-neutral-600">
              <h4 className="text-neutral-300 font-semibold mb-2 text-sm">Arquivos Enviados:</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li className="flex items-center gap-1.5 truncate">
                  <span role="img" aria-label="PDF Icon">📕</span>
                  Notas_Aula_Derivadas.pdf
                </li>
                <li className="flex items-center gap-1.5 truncate">
                  <span role="img" aria-label="Document Icon">📄</span>
                  Exemplos_Integrais.docx
                </li>
              </ul>
            </div>
            <Button type="submit" className="w-full py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-600 transition duration-200 text-sm">+ Adicionar Prova</Button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Discipline


