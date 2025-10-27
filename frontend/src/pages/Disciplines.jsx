import { useState } from 'react'
import Layout from "../components/Layout"
import NavigationBar from "../containers/NavigationBar"
import Discipline from "../containers/Discipline"
import AddDiscipline from "../containers/AddDiscipline"
import LoginModal from "../components/LoginModal"
import SignupModal from "../components/SignupModal"
import { WorkFormModal } from "@/components/WorkFormModal"
import { ExamFormModal } from "@/components/ExamFormModal"
import { useLocation } from 'react-router-dom'

const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
const ChevronUp = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>

const DUMMY_DISCIPLINES = [
  {
    id: 'd-1',
    title: "Cálculo I",
    color: "yellow",
    works: [
      { id: 'w-1', description: 'Revisão Bibliográfica (Entrega: 05/Nov) | Duração: 5h. Foco nos artigos de 2022.', borderColor: 'yellow', completed: false },
      { id: 'w-2', description: 'Estudo de Caso #1 (Concluído) | Análise de Caso de Sucesso em Transformação de Coordenadas. Duração: 8h.', borderColor: 'green', completed: true },
      { id: 'w-3', description: 'Lista de Exercícios 1 (Entrega: 20/Out) | Seções 1.1 a 1.5.', borderColor: 'yellow', completed: false },
    ],
    exams: [
      { id: 'e-1', description: 'P1 - Unidade 1 (Data: 15/Out) | Escopo: Derivadas e Regras de Cadeia.', borderColor: 'red', completed: false },
      { id: 'e-2', description: 'Mini-Teste Derivadas (Data: 01/Nov) | Teste surpresa sobre Tópicos de Cálculo I.', borderColor: 'red', completed: false },
      { id: 'e-3', description: 'P2 - Unidade 2 (Data: 19/Nov) | Escopo: Integrais e Funções Transcendentais.', borderColor: 'red', completed: false },
    ],
  },
  {
    id: 'd-2',
    title: "Programação Web",
    color: "blue",
    works: [
      { id: 'w-4', description: 'Projeto Final - Dashboard (Entrega: 15/Dez) | Implementar todas as funcionalidades de CRUD.', borderColor: 'blue', completed: false },
    ],
    exams: [
      { id: 'e-4', description: 'Exame Teórico Final (Data: 10/Dez) | Revisão de JavaScript e React.', borderColor: 'red', completed: false },
    ],
  },
  {
    id: 'd-3',
    title: "Estruturas de Dados",
    color: "purple",
    works: [
      { id: 'w-5', description: 'Implementação de Árvore AVL (Entrega: 25/Nov) | Foco na rotação e balanceamento.', borderColor: 'purple', completed: false },
      { id: 'w-6', description: 'Trabalho sobre Grafos (Concluído) | Algoritmo de Dijkstra em C.', borderColor: 'green', completed: true },
    ],
    exams: [
      { id: 'e-5', description: 'Prova de Conceitos (Data: 05/Nov) | Escopo: Pilhas, Filas e Listas Ligadas.', borderColor: 'red', completed: false },
    ],
  },
  {
    id: 'd-4',
    title: "Redes de Computadores",
    color: "green",
    works: [
      { id: 'w-7', description: 'Configuração de Sub-redes (Entrega: 10/Dez) | Cálculos de máscara e planejamento de IP.', borderColor: 'green', completed: false },
    ],
    exams: [
      { id: 'e-6', description: 'P1 - Modelo OSI e TCP/IP (Data: 01/Nov) | Questões conceituais sobre camadas.', borderColor: 'red', completed: false },
      { id: 'e-7', description: 'Exame Prático de Protocolos (Data: 20/Nov) | Análise de tráfego com Wireshark.', borderColor: 'red', completed: false },
    ],
  },
]

const Disciplines = () => {
  const location = useLocation()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const openLoginModal = () => {
    setIsSignupModalOpen(false)
    setIsLoginModalOpen(true)
  }
  const closeLoginModal = () => setIsLoginModalOpen(false)

  const openSignupModal = () => {
    setIsLoginModalOpen(false)
    setIsSignupModalOpen(true)
  }
  const closeSignupModal = () => setIsSignupModalOpen(false)

  const switchToLogin = () => {
    closeSignupModal()
    openLoginModal()
  }

  return (
    <Layout subtitle="Visão Geral das Disciplinas">
      <div className="flex flex-col p-5 gap-6 min-h-screen">
        <NavigationBar
          currentPath={location.pathname}
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
        />
        <div className="w-full flex flex-col md:flex-row md:space-x-8">
          <div className="w-full flex overflow-x-auto space-x-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {DUMMY_DISCIPLINES.map((discipline) => (
              <Discipline key={discipline.id} disciplineData={discipline} />
            ))}
            <AddDiscipline />
          </div>
        </div>
      </div>

      {isLoginModalOpen && (
        <LoginModal
          onClose={closeLoginModal}
        />
      )}

      {isSignupModalOpen && (
        <SignupModal
          onClose={closeSignupModal}
          onLoginClick={switchToLogin}
        />
      )}
    </Layout>
  )
}

export default Disciplines
