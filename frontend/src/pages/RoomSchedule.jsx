import { Button } from "@/components/ui/button";
import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const RoomSchedule = () => {
  return (
    <Layout subtitle="Insira seu ensalamento">
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 sm:p-6">

        <div className="w-full max-w-lg space-y-8">

          <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-white text-center mb-5 border-b border-neutral-600 pb-3">Upload de Arquivo</h2>

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
              <Button className="py-2.5 px-4 w-full font-bold" size={"lg"} asChild>
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
              <Button className="py-2.5 px-4 w-full font-bold" size={"lg"}>
                <Link to="/courselist">
                  Adicionar Matéria ao Ensalamento
                </Link>
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default RoomSchedule;