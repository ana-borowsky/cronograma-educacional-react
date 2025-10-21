import { Button } from "@/components/ui/button";
import { useState } from "react";
import Layout from "../components/Layout"

const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
const ChevronUp = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>

const Disciplines = () => {
  const [isCalcWorkFormOpen, setIsCalcWorkFormOpen] = useState(false);
  const [isCalcExamFormOpen, setIsCalcExamFormOpen] = useState(false);

  const [isProgWorkFormOpen, setIsProgWorkFormOpen] = useState(false);
  const [isProgExamFormOpen, setIsProgExamFormOpen] = useState(false);

  const [isFisicaWorkFormOpen, setIsFisicaWorkFormOpen] = useState(false);
  const [isFisicaExamFormOpen, setIsFisicaExamFormOpen] = useState(false);

  const [isPortWorkFormOpen, setIsPortWorkFormOpen] = useState(false);
  const [isPortExamFormOpen, setIsPortExamFormOpen] = useState(false);

  return (
    <Layout subtitle="Visão Geral das Disciplinas">
      {/* Container principal: Agora ocupa a largura total */}
      <div className="flex flex-col p-5 gap-6">
        {/* --- 1. BARRA DE NAVEGAÇÃO --- */}
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

        {/* --- 2. CONTAINER DO CONTEÚDO PRINCIPAL --- */}
        <div className="w-full flex flex-col md:flex-row md:space-x-8">

          {/* --- 2a. COLUNA DE FORMULÁRIOS (IA e Manual) --- */}
          <div className="w-full md:w-1/4 space-y-8 mb-8 md:mb-0">

            {/* Card "Ler arquivo com IA" */}
            <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-white text-center mb-5 border-b border-neutral-600 pb-3">Ler arquivo com IA</h2>
              <form className="space-y-6">
                <p className="text-neutral-400 text-sm text-center">Carregue um arquivo (ex: print) contendo a lista de matérias, salas e horários.</p>
                <div className="space-y-2">
                  <label htmlFor="file-upload" className="block text-neutral-300 font-semibold text-sm">Selecione o Arquivo do Ensalamento</label>
                  <input
                    type="file"
                    id="file-upload"
                    name="schedule-file"
                    required
                    className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                  />
                </div>
                <Button className="w-full" asChild>
                  <a href="/courselist" >
                    Processar Arquivo
                  </a>
                </Button>
              </form>
            </div>

            {/* Card "Ou insira manualmente" */}
            <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-white text-center mb-5 border-b border-neutral-600 pb-3">Ou insira manualmente</h2>
              <form className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="course-name" className="block text-neutral-300 font-semibold text-sm">Nome da Matéria</label>
                  <input
                    type="text"
                    id="course-name"
                    name="course-name"
                    placeholder="Ex: Cálculo I"
                    required
                    className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="room-name" className="block text-neutral-300 font-semibold text-sm">Sala / Local</label>
                  <input
                    type="text"
                    id="room-name"
                    name="room-name"
                    placeholder="Ex: Sala B-205 ou Laboratório de Física"
                    required
                    className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="schedule-time" className="block text-neutral-300 font-semibold text-sm">Horário e Dia</label>
                  <input
                    type="text"
                    id="schedule-time"
                    name="schedule-time"
                    placeholder="Ex: Segunda e Quarta, 19:00 - 21:00"
                    required
                    className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                  <label htmlFor="file-upload" className="block text-neutral-300 font-semibold text-sm">Selecione o arquivo de plano de ensino da matéria</label>
                  <input
                    type="file"
                    id="file-upload"
                    name="schedule-file"
                    required
                    className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                  />
                </div>

                <Button className="w-full" asChild>
                  <a href="/courselist">
                    Adicionar Matéria
                  </a>
                </Button>
              </form>
            </div>
          </div>

          {/* --- 2b. FILEIRA DE DISCIPLINAS --- */}
          <div className="w-full md:w-3/4 flex overflow-x-auto space-x-6 pb-4">

            {/* Cálculo I */}
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

            {/* Introdução à Programação */}
            <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-lg flex-shrink-0 w-[312px] flex flex-col">
              <h2 className="flex items-center text-xl font-bold text-white mb-4 border-b border-neutral-700 pb-2 truncate">
                <span className="w-3 h-3 bg-green-600 rounded-full mr-3 flex-shrink-0"></span>
                Introdução à Programação
              </h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-300 mb-3">Atividades e Trabalhos</h3>
                <ul className="space-y-2 text-neutral-400 text-xs">
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Projeto 1 - Site Pessoal (Entrega: 20/Out) | Duração: 15h</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-green-600 line-through opacity-70 truncate">Quiz de Variáveis (Concluído) | Duração: 2h</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Entrega do Módulo 3 (Entrega: 10/Nov) | Duração: 7h</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Projeto Final - App (Entrega: 15/Dez) | Duração: 20h</li>
                </ul>
                <hr className="my-4 border-neutral-700" />
                <div
                  className="flex justify-between items-center cursor-pointer p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition duration-200"
                  onClick={() => setIsProgWorkFormOpen(!isProgWorkFormOpen)}
                >
                  <p className="text-neutral-300 font-medium text-sm">Adicionar Novo Trabalho</p>
                  <span className="text-neutral-300">
                    {isProgWorkFormOpen ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
                {isProgWorkFormOpen && (
                  <form className="space-y-3 pt-4 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col">
                      <input type="text" placeholder="Nome do Trabalho" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <input type="number" placeholder="Duração Estimada (Horas)" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="prog-t-date" className="text-neutral-400 text-xs mb-1">Data de Entrega</label>
                      <input type="date" id="prog-t-date" title="Data de Entrega" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="prog-t-file" className="text-neutral-400 text-xs mb-1">Upload do Arquivo do Trabalho</label>
                      <input type="file" id="prog-t-file" name="prog-t-file" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
                    </div>
                    <Button type="submit" className="w-full py-2 rounded-md bg-green-700 text-white font-semibold hover:bg-green-600 transition duration-200 text-sm">+ Adicionar Trabalho</Button>
                  </form>
                )}
              </div>
              <hr className="my-6 border-neutral-600" />
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-neutral-300 mb-3">Provas e Avaliações</h3>
                <ul className="space-y-2 text-neutral-400 text-xs">
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Teste Lógica (Data: 25/Out)</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Prova Teórica Final (Data: 05/Dez)</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Avaliação de Sintaxe (Data: 10/Nov)</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Mini-Teste Funções (Data: 20/Nov)</li>
                </ul>
                <hr className="my-4 border-neutral-700" />
                <div
                  className="flex justify-between items-center cursor-pointer p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition duration-200"
                  onClick={() => setIsProgExamFormOpen(!isProgExamFormOpen)}
                >
                  <p className="text-neutral-300 font-medium text-sm">Adicionar Nova Prova</p>
                  <span className="text-neutral-300">
                    {isProgExamFormOpen ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
                {isProgExamFormOpen && (
                  <form className="space-y-3 pt-4 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col">
                      <input type="text" placeholder="Nome da Prova/Avaliação" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="prog-p-date" className="text-neutral-400 text-xs mb-1">Data da Prova</label>
                      <input type="date" id="prog-p-date" title="Data da Prova" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="prog-p-file" className="text-neutral-400 text-xs mb-1">Upload de PDFs (Material)</label>
                      <input type="file" id="prog-p-file" name="prog-p-file" multiple className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
                    </div>
                    <div className="p-3 bg-neutral-700 rounded-md border border-neutral-600">
                      <h4 className="text-neutral-300 font-semibold mb-2 text-sm">Arquivos Enviados:</h4>
                      <ul className="space-y-1 text-neutral-400 text-xs">
                        <li className="flex items-center gap-1.5 truncate">
                          <span role="img" aria-label="PDF Icon">📕</span>
                          Aula_01_Logica.pdf
                        </li>
                        <li className="flex items-center gap-1.5 truncate">
                          <span role="img" aria-label="PDF Icon">📕</span>
                          Guia_Referencia_JS.pdf
                        </li>
                      </ul>
                    </div>
                    <Button type="submit" className="w-full py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-600 transition duration-200 text-sm">+ Adicionar Prova</Button>
                  </form>
                )}
              </div>
            </div>

            {/* Física Experimental */}
            <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-lg flex-shrink-0 w-[312px] flex flex-col">
              <h2 className="flex items-center text-xl font-bold text-white mb-4 border-b border-neutral-700 pb-2 truncate">
                <span className="w-3 h-3 bg-red-600 rounded-full mr-3 flex-shrink-0"></span>
                Física Experimental
              </h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-300 mb-3">Atividades e Trabalhos</h3>
                <ul className="space-y-2 text-neutral-400 text-xs">
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Relatório Lab 3 (Entrega: 10/Nov) | Duração: 6h</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Questionário Online (Entrega: 01/Nov) | Duração: 2h</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Fichas de Exercício (Entrega: 28/Out) | Duração: 4h</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Relatório de Projeto Final (Entrega: 08/Dez) | Duração: 12h</li>
                </ul>
                <hr className="my-4 border-neutral-700" />
                <div
                  className="flex justify-between items-center cursor-pointer p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition duration-200"
                  onClick={() => setIsFisicaWorkFormOpen(!isFisicaWorkFormOpen)}
                >
                  <p className="text-neutral-300 font-medium text-sm">Adicionar Novo Trabalho</p>
                  <span className="text-neutral-300">
                    {isFisicaWorkFormOpen ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
                {isFisicaWorkFormOpen && (
                  <form className="space-y-3 pt-4 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col">
                      <input type="text" placeholder="Nome do Trabalho" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <input type="number" placeholder="Duração Estimada (Horas)" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="fisica-t-date" className="text-neutral-400 text-xs mb-1">Data de Entrega</label>
                      <input type="date" id="fisica-t-date" title="Data de Entrega" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="fisica-t-file" className="text-neutral-400 text-xs mb-1">Upload do Arquivo do Trabalho</label>
                      <input type="file" id="fisica-t-file" name="fisica-t-file" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
                    </div>
                    <Button type="submit" className="w-full py-2 rounded-md bg-green-700 text-white font-semibold hover:bg-green-600 transition duration-200 text-sm">+ Adicionar Trabalho</Button>
                  </form>
                )}
              </div>
              <hr className="my-6 border-neutral-600" />
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-neutral-300 mb-3">Provas e Avaliações</h3>
                <ul className="space-y-2 text-neutral-400 text-xs">
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Mini-Teste 2 (Data: 28/Out)</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Prova Parcial 2 (Data: 20/Nov)</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Prova Geral (Data: 15/Dez)</li>
                </ul>
                <hr className="my-4 border-neutral-700" />
                <div
                  className="flex justify-between items-center cursor-pointer p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition duration-200"
                  onClick={() => setIsFisicaExamFormOpen(!isFisicaExamFormOpen)}
                >
                  <p className="text-neutral-300 font-medium text-sm">Adicionar Nova Prova</p>
                  <span className="text-neutral-300">
                    {isFisicaExamFormOpen ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
                {isFisicaExamFormOpen && (
                  <form className="space-y-3 pt-4 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col">
                      <input type="text" placeholder="Nome da Prova/Avaliação" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="fisica-p-date" className="text-neutral-400 text-xs mb-1">Data da Prova</label>
                      <input type="date" id="fisica-p-date" title="Data da Prova" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="fisica-p-file" className="text-neutral-400 text-xs mb-1">Upload de PDFs (Material)</label>
                      <input type="file" id="fisica-p-file" name="fisica-p-file" multiple className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
                    </div>
                    <div className="p-3 bg-neutral-700 rounded-md border border-neutral-600">
                      <h4 className="text-neutral-300 font-semibold mb-2 text-sm">Arquivos Enviados:</h4>
                      <ul className="space-y-1 text-neutral-400 text-xs">
                        <li className="flex items-center gap-1.5 truncate">
                          <span role="img" aria-label="PDF Icon">📕</span>
                          Apostila_Cap_7_Eletricidade.pdf
                        </li>
                      </ul>
                    </div>
                    <Button type="submit" className="w-full py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-600 transition duration-200 text-sm">+ Adicionar Prova</Button>
                  </form>
                )}
              </div>
            </div>

            {/* Língua Portuguesa e Comunicação */}
            <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-lg flex-shrink-0 w-[312px] flex flex-col">
              <h2 className="flex items-center text-xl font-bold text-white mb-4 border-b border-neutral-700 pb-2 truncate">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                Língua Portuguesa e Comunicação
              </h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-300 mb-3">Atividades e Trabalhos</h3>
                <ul className="space-y-2 text-neutral-400 text-xs">
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Artigo de Opinião (Entrega: 12/Nov) | Duração: 8h</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-green-600 line-through opacity-70 truncate">Análise Textual (Concluído) | Duração: 4h</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Resenha de Filme (Entrega: 01/Dez) | Duração: 5h</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-yellow-600 truncate">Exercícios de Sintaxe (Entrega: 05/Nov) | Duração: 3h</li>
                </ul>
                <hr className="my-4 border-neutral-700" />
                <div
                  className="flex justify-between items-center cursor-pointer p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition duration-200"
                  onClick={() => setIsPortWorkFormOpen(!isPortWorkFormOpen)}
                >
                  <p className="text-neutral-300 font-medium text-sm">Adicionar Novo Trabalho</p>
                  <span className="text-neutral-300">
                    {isPortWorkFormOpen ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
                {isPortWorkFormOpen && (
                  <form className="space-y-3 pt-4 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col">
                      <input type="text" placeholder="Nome do Trabalho" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <input type="number" placeholder="Duração Estimada (Horas)" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="port-t-date" className="text-neutral-400 text-xs mb-1">Data de Entrega</label>
                      <input type="date" id="port-t-date" title="Data de Entrega" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="port-t-file" className="text-neutral-400 text-xs mb-1">Upload do Arquivo do Trabalho</label>
                      <input type="file" id="port-t-file" name="port-t-file" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
                    </div>
                    <Button type="submit" className="w-full py-2 rounded-md bg-green-700 text-white font-semibold hover:bg-green-600 transition duration-200 text-sm">+ Adicionar Trabalho</Button>
                  </form>
                )}
              </div>
              <hr className="my-6 border-neutral-600" />
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-neutral-300 mb-3">Provas e Avaliações</h3>
                <ul className="space-y-2 text-neutral-400 text-xs">
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Avaliação de Gramática (Data: 01/Nov)</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Avaliação de Redação (Data: 30/Nov)</li>
                  <li className="p-2 bg-neutral-700 rounded-md border-l-4 border-red-600 truncate">Apresentação Oral (Data: 20/Dez)</li>
                </ul>
                <hr className="my-4 border-neutral-700" />
                <div
                  className="flex justify-between items-center cursor-pointer p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition duration-200"
                  onClick={() => setIsPortExamFormOpen(!isPortExamFormOpen)}
                >
                  <p className="text-neutral-300 font-medium text-sm">Adicionar Nova Prova</p>
                  <span className="text-neutral-300">
                    {isPortExamFormOpen ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
                {isPortExamFormOpen && (
                  <form className="space-y-3 pt-4 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col">
                      <input type="text" placeholder="Nome da Prova/Avaliação" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="port-p-date" className="text-neutral-400 text-xs mb-1">Data da Prova</label>
                      <input type="date" id="port-p-date" title="Data da Prova" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-neutral-500 text-sm" required />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="port-p-file" className="text-neutral-400 text-xs mb-1">Upload de PDFs (Material)</label>
                      <input type="file" id="port-p-file" name="port-p-file" multiple className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
                    </div>
                    <div className="p-3 bg-neutral-700 rounded-md border border-neutral-600">
                      <h4 className="text-neutral-300 font-semibold mb-2 text-sm">Arquivos Enviados:</h4>
                      <ul className="space-y-1 text-neutral-400 text-xs">
                        <li className="flex items-center gap-1.5 truncate">
                          <span role="img" aria-label="Document Icon">📄</span>
                          Guia_Redacao_Final.docx
                        </li>
                        <li className="flex items-center gap-1.5 truncate">
                          <span role="img" aria-label="PDF Icon">📕</span>
                          Verbos_e_Concordancia.pdf
                        </li>
                        <li className="flex items-center gap-1.5 truncate">
                          <span role="img" aria-label="Document Icon">📄</span>
                          Exemplos_Argumentacao.pptx
                        </li>
                      </ul>
                    </div>
                    <Button type="submit" className="w-full py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-600 transition duration-200 text-sm">+ Adicionar Prova</Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Disciplines;





