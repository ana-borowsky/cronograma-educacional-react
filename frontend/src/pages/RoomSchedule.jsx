import React from 'react';
import { Button } from "@/components/ui/button";
import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const RoomSchedule = () => {
  const mockCourses = [
    { id: 1, name: "Cálculo I", schedule: "Segunda e Quarta, 19:00 - 21:00", room: "Sala B-205" },
    { id: 2, name: "Introdução à Programação", schedule: "Terça e Quinta, 19:00 - 21:00", room: "Lab de Informática 3" },
    { id: 3, name: "Física Experimental", schedule: "Sexta, 19:00 - 22:00", room: "Lab de Física 101" },
  ];

  return (
    <Layout subtitle="Insira e gerencie suas matérias.">
      <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row lg:space-x-8">
        <div className="w-full lg:w-2/5 space-y-8 mb-8 lg:mb-0">

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
              <Button className="w-full">
                <Link to="/courselist" >
                  Enviar e Processar Arquivo
                </Link>
              </Button>

            </form>
          </div>

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
              </div>
              <Button className="w-full">
                <Link to="/courselist">
                  Adicionar Matéria ao Ensalamento
                </Link>
              </Button>
            </form>
          </div>
        </div>

        <div className="w-full lg:w-3/5 bg-neutral-900 rounded-xl shadow-2xl p-5 md:p-8 border border-neutral-700">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-neutral-700 pb-3">
            Minhas Matérias Cadastradas
          </h2>

          <div className="space-y-4 mb-6">
            {mockCourses.map(course => (
              <div key={course.id} className="flex items-center justify-between p-4 bg-neutral-800 border border-neutral-700 rounded-lg transition duration-200 hover:bg-neutral-700">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white">{course.name}</h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    <span className="font-medium text-neutral-300">{course.schedule}</span> / <span className="text-neutral-500">{course.room}</span>
                  </p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button className="p-2 bg-neutral-700 rounded-full text-white hover:bg-neutral-600 transition duration-150" aria-label="Editar">
                    <span role="img" aria-label="lápis">✏️</span>
                  </Button>
                  <Button className="p-2 bg-red-700 rounded-full text-white hover:bg-red-600 transition duration-150" aria-label="Excluir">
                    <span role="img" aria-label="lixeira">🗑️</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
      <div className="w-full flex justify-center gap-10 lg:mb-12">
        <Button className="w-1/4 bg-secondary text-white">
        <Link to="/courselist" >
          Cancelar
        </Link>
      </Button>
      <Button className="w-1/4">
        <Link to="/syllabus" >
          Próximo
        </Link>
  
      </Button>
      </div >
    </Layout>
  );
};

export default RoomSchedule;
