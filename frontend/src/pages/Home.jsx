import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Layout from "../components/layout/Layout"
import { Link } from "react-router-dom"
import LoginModal from "../components/LoginModal"
import SignupModal from "../components/SignupModal"
import Lottie from "lottie-react"
import gatinhoBalao from "@/animations/gatinho_balao.json"

const DatasetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" strokeWidth={2} stroke="currentColor" fill="none" className="h-6 w-6">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5zm2-10h2V7H7v2zm0 4h2v-2H7v2zm0 4h2v-2H7v2zm4-8h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-8h2V7h-2v2zm0 4h2v-2h-2v2z" stroke="none" fill="currentColor" />
  </svg>
)

const NotificationsActiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" strokeWidth={2} stroke="currentColor" fill="none" className="h-5 w-5">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" stroke="none" fill="currentColor" />
    <circle cx="18" cy="8" r="4" fill="red" stroke="white" strokeWidth="1.5" />
    <text x="18" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">!</text>
  </svg>
)

const AlarmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" strokeWidth={2} stroke="currentColor" fill="none" className="h-5 w-5">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.61 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9-4.02-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1-8h2v4h-2zm0-6h2v2h-2z" stroke="none" fill="currentColor" />
  </svg>
)

const Zap = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
const Clock = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
const BarChart3 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6v7.5M9.75 21H12m0 0h2.25M12 21V9.75M8.25 21h7.5" /></svg>
const CheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>


const Home = () => {
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

  const timeBlocks = [
    // SEG
    [
      { h: 'h-1/4', color: 'bg-blue-600', label: 'Leitura' },
      { h: 'h-[10%]', color: 'bg-neutral-400' },
      { h: 'h-1/3', color: 'bg-red-600', label: 'Estudo P1' },
      { h: 'h-[10%]', color: 'bg-neutral-400' },
      { h: 'h-1/5', color: 'bg-green-600', label: 'Revisão Lógica' },
    ],
    // TER
    [
      { h: 'h-1/5', color: 'bg-blue-600', label: 'Estudar algoritmos' },
      { h: 'h-1/4', color: 'bg-red-600', label: 'Trabalho de grafos' },
      { h: 'h-[10%]', color: 'bg-neutral-400' },
      { h: 'h-1/4', color: 'bg-green-600', label: 'Vídeo de pesquisa' },
      { h: 'h-1/5', color: 'bg-blue-600', label: 'Estudo P1' },
    ],
    // QUA
    [
      { h: 'h-1/3', color: 'bg-orange-600', label: 'Iniciação científica.' },
      { h: 'h-1/5', color: 'bg-blue-600', label: 'Monitoria.' },
      { h: 'h-[10%]', color: 'bg-neutral-400' },
      { h: 'h-1/4', color: 'bg-green-600', label: 'Lista de algoritmos' },
      { h: 'h-1/5', color: 'bg-blue-600', label: 'Estudar java.' },
    ],
    // QUI
    [
      { h: 'h-1/5', color: 'bg-blue-600', label: 'Trabalho de rust' },
      { h: 'h-1/4', color: 'bg-orange-600', label: 'Pesquisa.' },
      { h: 'h-[10%]', color: 'bg-neutral-400' },
      { h: 'h-1/3', color: 'bg-green-600', label: 'Revisão P2' },
      { h: 'h-[10%]', color: 'bg-neutral-400' },
    ],
    // SEX
    [
      { h: 'h-1/4', color: 'bg-orange-600', label: 'Estudo P1' },
      { h: 'h-1/4', color: 'bg-blue-600', label: 'Trabalho de pesquisa' },
      { h: 'h-[10%]', color: 'bg-neutral-400' },
      { h: 'h-1/3', color: 'bg-green-600', label: 'Estudo grafos' },
      { h: 'h-[10%]', color: 'bg-neutral-400' },
    ]
  ]

  return (
    <Layout subtitle="A rotina que funciona">
      <div className="max-w-[1600px] mx-auto p-5 space-y-16">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-10">
          <div className="lg:w-1/2">

            <h1
              className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-yellow-400 to-orange-500 
             drop-shadow-lg
             [-webkit-text-stroke:2px_black]"
            >
              Domine seus estudos com o poder da I.A.
            </h1>

            <p className="font-semibold text-neutral-800 mb-14">
              Beezer: A ferramenta definitiva que planeja, realoca e otimiza sua agenda acadêmica, garantindo que todas as suas tarefas sejam concluídas no prazo, sem sobrecarga.
            </p>

            <div className="flex gap-4">
              <Button
                size="xl"
                variant="yellow-primary"
                className="w-full text-lg font-semibold border border-neutral-400 transition duration-200"
                onClick={openSignupModal}
              >
                Comece Grátis <Zap className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 p-6 hover:bg-neutral-200  bg-neutral-300 rounded-xl border border-neutral-400 relative min-h-[300px] ransition duration-300 hover:scale-102">
            <div className="absolute top-4 left-7 mt-4 text-sm text-neutral-800 font-bold flex items-center gap-1">
              <Clock /> Cronograma otimizado por I.A.
            </div>
            <div className="h-64 bg-neutral-300 rounded-lg flex items-center justify-center p-2 mt-8">

              <div className="grid grid-cols-5 gap-1 w-full h-full text-[9px] font-semibold">
                {['SEG', 'TER', 'QUA', 'QUI', 'SEX'].map((day, i) => (
                  <div key={day} className="flex flex-col">
                    <div className="text-neutral-800 text-center mb-1 text-xs">{day}</div>
                    <div className="flex-grow flex flex-col justify-start space-y-0.5">
                      {timeBlocks[i].map((block, index) => (
                        <div key={index} className={`${block.h} ${block.color} text-white flex items-center justify-center rounded-sm px-0.5 whitespace-nowrap overflow-hidden text-center`}>
                          {block.label}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-xs text-neutral-800 mt-3">Visualização semanal otimizada por I.A. (totalmente alocada)</p>
          </div>
        </div>

        <div className="pt-10 mt-40">
          <h2 className="text-4xl font-bold text-neutral-800 text-center border-b border-neutral-700 pb-4 mb-20">
            Como Beezer transforma sua jornada
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-neutral-700 mb-4 mt-25 flex items-center gap-2">
                <DatasetIcon className="text-yellow-600" /> Otimização inteligente de tempo
              </h3>
              <p className="text-neutral-800 mb-6">Veja a diferença entre a alocação manual e o planejamento do Beezer:</p>

              <div className="h-40 p-1">

                <div className="mb-4">
                  <p className="font-semibold text-neutral-800 mb-2">Seu planejamento manual</p>
                  <div className="flex h-12 w-full relative hover:scale-102 transition duration-300">
                    <div className="bg-red-700 w-[20%] rounded-l-md" title="Tempo Alocado"></div>
                    <div className="bg-red-900 w-[80%] rounded-r-md" title="Tempo Restante Necessário"></div>
                    <span className="absolute left-0 top-0 h-full flex items-center pl-2 text-white text-xs">20% Alocado</span>
                  </div>
                  <p className="text-sm text-neutral-700 mt-2">Tarefas mal-feitas ou não feitas. Falta de tempo e sobrecarga. </p>
                </div>
                
                <div>
                  <p className="font-semibold text-neutral-800 mt-8 mb-2">Planejamento Beezer (Otimizado por I.A.)</p>
                  <div className="flex h-12 w-full relative">
                    <div className="bg-green-600 w-full rounded-md ransition duration-300 hover:scale-102" title="100% de Alocação Otimizada"></div>
                    <span className="absolute left-0 top-0 h-full flex items-center pl-2 text-white text-xs">100% Otimizado</span>
                  </div>
                  <p className="text-sm text-neutral-700 mt-2">Todas as tarefas concluídas no prazo.</p>
                </div>
              </div>
            </div>
            <div className="flex mx-auto flex-col justify-center items-center">
              <img
                src="/assets/gatinho_rostinho_cortado.svg"
                style={{ width: '170px', height: 'auto' }}
                className="-mb-1"
              />
              <div className="bg-neutral-300 hover:bg-neutral-200 p-10 rounded-lg border border-neutral-400 h-80 ransition duration-300 hover:scale-102">
                <h3 className="text-2xl font-bold text-neutral-600 mb-12 flex items-center gap-2">
                  <CheckCircle /> Ciclo de revisão e conclusão
                </h3>

                <ul className="space-y-4 text-yellow-600">
                  <li className="flex items-start gap-3">
                    <AlarmIcon className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-800">Confirmação diária:</p>
                      <p className="text-sm text-neutral-600">Marque as atividades que realizou durante o dia.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 mt-1 text-yellow-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-800">Realocação imediata:</p>
                      <p className="text-sm text-neutral-600">Se uma tarefa falhar, a I.A. a realoca na agenda pra você.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          
          <h2 className="text-4xl font-bold text-neutral-800 text-center border-b border-neutral-700 pb-4 mt-20 mb-20">
            Funcionalidades essenciais
          </h2>
          <img
            src="/assets/gatinho_sentado.svg"
            style={{ width: '200px', height: 'auto' }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">

            <div className="feature-card bg-neutral-300 p-10 rounded-lg border-l-4 border-green-600 hover:bg-neutral-200 transition duration-300 hover:scale-102">
              <h3 className="text-2xl font-bold text-neutral-600 mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-600" /> Otimização por prioridade
              </h3>
              <p className="text-neutral-600 text-sm">
                Defina o nível de dificuldade de cada atividade.<br>
                </br>Coloque o tempo que levará para fazer a atividade e a data de entrega. <br></br>A I.A. usa a prioridade da matéria para garantir que as mais importantes tenham tempo suficiente alocado.
              </p>
            </div>

            <div className="feature-card bg-neutral-300 p-10 rounded-lg border-l-4 border-blue-600 hover:bg-neutral-200 transition duration-300 hover:scale-102">
              <h3 className="text-2xl font-bold text-neutral-600 mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-500" /> Gestão de tempo livre
              </h3>
              <p className="text-neutral-600 text-sm">
                Defina seus horários de de estudo, permitindo que o Beezer preencha-os de forma eficiente e otimizada.<br></br>
                Você pode mudar facilmente para cada semana, adaptando-se às suas necessidades.
              </p>
            </div>

            <div className="feature-card bg-neutral-300 p-10 rounded-lg border-l-4 border-red-600 hover:bg-neutral-200 transition duration-300 hover:scale-102">
              <h3 className="text-2xl font-bold text-neutral-600 mb-4 flex items-center gap-2">
                <DatasetIcon className="h-6 w-6" /> Sua rotina facilitada
              </h3>
              <p className="text-neutral-600 text-sm">
                Do caos ao controle em poucos cliques.<br></br><br></br>
                Sua rotina otimizada de forma inteligente e eficiente.<br></br>
              </p>
            </div>

          </div>
        </div>
        <div className="flex justify-center items-center mb-30 flex-col">

          <Lottie
            animationData={gatinhoBalao}
            loop={true}
            className="w-100"
            autoplay
          />
          <Button
            size="xl"
            variant="yellow-primary"
            className="w-[500px] text-lg font-semibold border border-neutral-400 transition duration-200"
            onClick={openSignupModal}
          >
            Comece Grátis <Zap className="ml-2 h-5 w-5" />
          </Button>

          
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

export default Home