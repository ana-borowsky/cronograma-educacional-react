import React, { useState } from 'react'
import { ListItem } from "@/components/ListItem"
import { ToDoListTitle } from "@/components/ToDoListTitle"
import { TimeProgress } from "@/components/TimeProgress"

const getNextDate = (currentDate) => {
  return "Quarta-feira, 16 de Outubro"
}

const getPrevDate = (currentDate) => {
  return "Segunda-feira, 14 de Outubro"
}

const ToDoList = () => {
  const [displayedDate, setDisplayedDate] = useState("Terça-feira, 15 de Outubro")

  const handlePrevDate = () => {
    setDisplayedDate(getPrevDate(displayedDate))
  }

  const handleNextDate = () => {
    setDisplayedDate(getNextDate(displayedDate))
  }

  const totalHours = 10
  const completedHours = 4
  const progressPercent = (completedHours / totalHours) * 100
  const progressLabel = `${completedHours} de ${totalHours} Horas Concluídas`

  return (
    <div className="flex-grow p-6 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg">

      <ToDoListTitle
        currentDate={displayedDate}
        onPrevClick={handlePrevDate}
        onNextClick={handleNextDate}
      />

      <TimeProgress
        progressValue={progressPercent}
        progressText={progressLabel}
      />

      <div className="space-y-4">
        <ListItem
          id="tarefa-1"
          fullDescription="08:00 - 09:30 | Cálculo I: Resolver Lista de Exercícios 3 (Integrais)."
          borderColor="yellow"
        />
        <ListItem
          id="tarefa-2"
          fullDescription="09:30 - 11:00 | Física Experimental: Preparar Relatório 2 sobre Conservação de Energia."
          borderColor="red"
          defaultChecked={true}
        />
        <ListItem
          id="tarefa-3"
          fullDescription="11:00 - 12:30 | Algoritmos: Debugar a implementação da Tabela Hash do Projeto 1."
          borderColor="yellow"
        />
        <ListItem
          id="tarefa-4"
          fullDescription="14:00 - 15:00 | Filosofia: Leitura do artigo sobre Metafísica de Aristóteles."
          borderColor="red"
        />
        <ListItem
          id="tarefa-5"
          fullDescription="15:00 - 16:30 | Engenharia de Software: Reunião com a equipa para refinar os requisitos do caso de uso."
          borderColor="green"
        />
        <ListItem
          id="tarefa-6"
          fullDescription="16:30 - 17:30 | Cálculo I: Assistir à vídeo aula sobre Regra da Cadeia e Derivadas Parciais."
          borderColor="yellow"
          defaultChecked={true}
        />
        <ListItem
          id="tarefa-7"
          fullDescription="17:30 - 18:00 | Revisão geral do Plano de Estudos da semana."
          borderColor="green"
        />
        <ListItem
          id="tarefa-8"
          fullDescription="19:30 - 21:00 | Física Experimental: Resolver 5 exercícios avançados de Eletromagnetismo (preparação para P2)."
          borderColor="red"
        />
        <ListItem
          id="tarefa-9"
          fullDescription="21:00 - 22:00 | Algoritmos: Revisão de notação Big O e análise de complexidade."
          borderColor="yellow"
          defaultChecked={true}
        />
        <ListItem
          id="tarefa-10"
          fullDescription="22:00 - 23:00 | Engenharia de Software: Finalizar o Diagrama de Classes UML."
          borderColor="yellow"
        />
      </div>
    </div>
  )
}

export default ToDoList
