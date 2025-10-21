import { Button } from "@/components/ui/button";
import Layout from "../components/Layout"
import { Link } from "react-router-dom";

// Ícones SVG no estilo Google Material Icons

// Ícone Dataset (para Otimização Inteligente e Sincronização Google Calendar)
const DatasetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" strokeWidth={2} stroke="currentColor" fill="none" className="h-6 w-6">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5zm2-10h2V7H7v2zm0 4h2v-2H7v2zm0 4h2v-2H7v2zm4-8h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-8h2V7h-2v2zm0 4h2v-2h-2v2z" stroke="none" fill="currentColor" />
  </svg>
);

// Ícone de Notificação (Circle Notifications / notifications_active)
const NotificationsActiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" strokeWidth={2} stroke="currentColor" fill="none" className="h-5 w-5">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" stroke="none" fill="currentColor" />
    <circle cx="18" cy="8" r="4" fill="red" stroke="white" strokeWidth="1.5" />
    <text x="18" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">!</text>
  </svg>
);


// Ícone de Alarme (Alarm)
const AlarmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" strokeWidth={2} stroke="currentColor" fill="none" className="h-5 w-5">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.61 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9-4.02-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1-8h2v4h-2zm0-6h2v2h-2z" stroke="none" fill="currentColor" />
  </svg>
);

const Zap = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;
const Clock = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BarChart3 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6v7.5M9.75 21H12m0 0h2.25M12 21V9.75M8.25 21h7.5" /></svg>;
const CheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;


const Home = () => {
  // Array de alturas simuladas para preencher o cronograma
  const timeBlocks = [
    // SEG
    [
      { h: 'h-1/4', color: 'bg-blue-800', label: 'Aula C.' }, // Aula
      { h: 'h-[10%]', color: 'bg-neutral-600' }, // Intervalo
      { h: 'h-1/3', color: 'bg-orange-600', label: 'Estudo P1' }, // Estudo Prioridade Alta
      { h: 'h-[10%]', color: 'bg-neutral-600' }, // Intervalo
      { h: 'h-1/5', color: 'bg-green-700', label: 'Revisão Lógica' }, // Estudo Prioridade Média
    ],
    // TER
    [
      { h: 'h-1/5', color: 'bg-blue-800', label: 'Aula Lógica' }, // Aula
      { h: 'h-1/4', color: 'bg-orange-600', label: 'Estudo P2' },
      { h: 'h-[10%]', color: 'bg-neutral-600' },
      { h: 'h-1/4', color: 'bg-green-700', label: 'Revisão C.' },
      { h: 'h-1/5', color: 'bg-blue-800', label: 'Aula P2' },
    ],
    // QUA
    [
      { h: 'h-1/3', color: 'bg-orange-600', label: 'Trabalho G.' },
      { h: 'h-1/5', color: 'bg-blue-800', label: 'Aula G.' },
      { h: 'h-[10%]', color: 'bg-neutral-600' },
      { h: 'h-1/4', color: 'bg-green-700', label: 'Ex. Física' },
      { h: 'h-1/5', color: 'bg-blue-800', label: 'Aula C.' },
    ],
    // QUI
    [
      { h: 'h-1/5', color: 'bg-blue-800', label: 'Aula Lógica' },
      { h: 'h-1/4', color: 'bg-orange-600', label: 'Projeto F.' },
      { h: 'h-[10%]', color: 'bg-neutral-600' },
      { h: 'h-1/3', color: 'bg-green-700', label: 'Revisão P2' },
      { h: 'h-[10%]', color: 'bg-neutral-600' },
    ],
    // SEX
    [
      { h: 'h-1/4', color: 'bg-orange-600', label: 'Prova P1' },
      { h: 'h-1/4', color: 'bg-blue-800', label: 'Aula C.' },
      { h: 'h-[10%]', color: 'bg-neutral-600' },
      { h: 'h-1/3', color: 'bg-green-700', label: 'Leitura G.' },
      { h: 'h-[10%]', color: 'bg-neutral-600' },
    ]
  ];

  return (
    <Layout subtitle="A rotina que funciona">
      <div className="max-w-[1600px] mx-auto p-5 space-y-16">

        {/* 1. HERO SECTION - MAIS IMPRESSIONANTE */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-10">
          <div className="lg:w-1/2">

            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight 
                  bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 
                  drop-shadow-lg">
              Domine seus estudos com o poder da I.A.
            </h1>
            <p className="text-neutral-300 text-xl mb-8 leading-relaxed">
              Beezer: A ferramenta definitiva que planeja, realoca e otimiza sua agenda acadêmica, garantindo que todas as suas tarefas sejam concluídas no prazo, sem sobrecarga.
            </p>

            <div className="flex gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-orange-600 text-lg font-semibold shadow-lg transition duration-200" asChild>
                <Link to="/signup">
                  Comece Grátis <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-neutral-700 border-neutral-600 hover:bg-neutral-600 text-neutral-300 text-lg font-semibold transition duration-200" asChild>
                <Link to="/login">
                  Fazer Login
                </Link>
              </Button>
            </div>
          </div>

          {/* Mockup Simulado de Agenda Otimizada (AGORA PREENCHIDO) */}
          <div className="lg:w-1/2 p-6 bg-neutral-700 rounded-xl border border-neutral-600 shadow-2xl relative min-h-[300px]">
            <div className="absolute top-4 left-4 text-sm text-yellow-400 font-bold flex items-center gap-1">
              <Clock /> Planejamento Otimizado por I.A.
            </div>
            <div className="h-64 bg-neutral-800 rounded-lg flex items-center justify-center p-2 mt-8">

              <div className="grid grid-cols-5 gap-1 w-full h-full text-[9px] font-semibold">
                {['SEG', 'TER', 'QUA', 'QUI', 'SEX'].map((day, i) => (
                  <div key={day} className="flex flex-col">
                    <div className="text-neutral-400 text-center mb-1 text-xs">{day}</div>
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
            <p className="text-center text-xs text-neutral-500 mt-3">Visualização Semanal Otimizada por I.A. (Totalmente Alocada)</p>
          </div>
        </div>

        {/* 2. VISÃO GERAL DAS ESPECIFICAÇÕES - Foco na Otimização */}
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-neutral-200 mb-8 text-center border-b border-neutral-700 pb-4">
            Como Beezer Transforma Sua Jornada
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* OTIMIZAÇÃO (Gráfico Fictício) */}
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 shadow-xl col-span-2">
              <h3 className="text-2xl font-bold text-neutral-100 mb-4 flex items-center gap-2">
                <DatasetIcon className="text-yellow-500" /> Otimização Inteligente de Tempo
              </h3>
              <p className="text-neutral-400 mb-6">Veja a diferença entre a alocação manual e o planejamento do Beezer:</p>

              <div className="h-40 p-1">

                <div className="mb-6">
                  <p className="text-sm text-neutral-300 mb-1">Seu Planejamento Manual (Fictício)</p>
                  <div className="flex h-6 w-full relative">
                    <div className="bg-red-700 w-[20%] rounded-l-md" title="Tempo Alocado"></div>
                    <div className="bg-red-900 w-[80%] rounded-r-md" title="Tempo Restante Necessário"></div>
                    <span className="absolute left-0 top-0 h-full flex items-center pl-2 text-white text-xs">20% Alocado</span>
                  </div>
                  <p className="text-xs text-red-400 mt-1">Falta de tempo e sobrecarga.</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-300 mb-1">Planejamento Beezer (I.A. Otimizado)</p>
                  <div className="flex h-6 w-full relative">
                    <div className="bg-green-600 w-full rounded-md" title="100% de Alocação Otimizada"></div>
                    <span className="absolute left-0 top-0 h-full flex items-center pl-2 text-white text-xs">100% Otimizado</span>
                  </div>
                  <p className="text-xs text-green-400 mt-1">Todas as tarefas concluídas no prazo.</p>
                </div>
              </div>
            </div>

            {/* CICLO DE FEEDBACK */}
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 shadow-xl">
              <h3 className="text-2xl font-bold text-neutral-100 mb-4 flex items-center gap-2">
                <CheckCircle className="text-blue-500" /> Ciclo de Revisão e Conclusão
              </h3>

              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-start gap-3">
                  <NotificationsActiveIcon className="h-5 w-5 mt-1 text-orange-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Notificações e Lembretes:</p>
                    <p className="text-sm">Receba alertas para as atividades que precisam ser cumpridas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlarmIcon className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Confirmação Diária:</p>
                    <p className="text-sm">Verificamos se a atividade foi feita e reagendamos o que falhou.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 mt-1 text-yellow-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Realocação Imediata:</p>
                    <p className="text-sm">Se uma tarefa falhar, a I.A. a realoca automaticamente na agenda.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. RECURSOS CHAVE DETALHADOS (ANTIGOS FEATURE CARDS) */}
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-neutral-200 mb-8 text-center border-b border-neutral-700 pb-4">
            Funcionalidades Essenciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="feature-card bg-neutral-700 p-6 rounded-lg border-t-4 border-yellow-500 shadow-lg hover:bg-neutral-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-500" /> Otimização por Prioridade
              </h3>
              <p className="text-neutral-400 text-sm">
                Coloque a duração e data de entrega. A I.A. usa a prioridade da matéria para garantir que o mais importante tenha tempo suficiente alocado.
              </p>
            </div>

            <div className="feature-card bg-neutral-700 p-6 rounded-lg border-t-4 border-blue-500 shadow-lg hover:bg-neutral-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-500" /> Gestão de Tempo Livre
              </h3>
              <p className="text-neutral-400 text-sm">
                Defina seus de estudo, permitindo que o programa preencha os espaços de forma eficiente.
              </p>
            </div>

            <div className="feature-card bg-neutral-700 p-6 rounded-lg border-t-4 border-green-500 shadow-lg hover:bg-neutral-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <DatasetIcon className="h-6 w-6 text-green-500" /> Sincronização Google Calendar
              </h3>
              <p className="text-neutral-400 text-sm">
                Após a confirmação, sua agenda otimizada é automaticamente atualizada no Google Calendar, mantendo você em dia em todas as plataformas.
              </p>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Home;