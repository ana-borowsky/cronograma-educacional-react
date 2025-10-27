import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const XMark = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>

export const WorkForm = ({ onClose }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div
      className="bg-neutral-800 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 border border-neutral-700"
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="p-5 border-b border-neutral-700 flex justify-between items-center">
        <h3 id="modal-title" className="text-xl font-bold text-white">Adicionar Novo Trabalho</h3>
        <Button
          className="bg-transparent text-neutral-400 hover:bg-neutral-700 p-1 rounded-full"
          onClick={onClose}
          aria-label="Fechar"
        >
          <XMark />
        </Button>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-4 p-5">

        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="Nome do Trabalho (Ex: Revisão Bibliográfica)"
            required
            variant="dark"
          />
        </div>

        <div className="flex flex-col">
          <Input
            type="number"
            placeholder="Duração Estimada (Horas)"
            min="0.5"
            step="0.5"
            required
            variant="dark"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="modal-t-date" className="text-neutral-400 text-xs mb-1 font-medium">Data de Entrega</label>
          <Input
            type="date"
            id="modal-t-date"
            title="Data de Entrega"
            required
            variant="dark"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="modal-t-file" className="text-neutral-400 text-xs mb-1 font-medium">Upload de Arquivo (Opcional)</label>
          <Input
            type="file"
            id="modal-t-file"
            name="modal-t-file"
            variant="dark"
            className="w-full p-3 border border-neutral-600 rounded-lg bg-neutral-700 text-neutral-300 file:mr-3 file:py-2 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-600 file:text-white hover:file:bg-yellow-500 cursor-pointer"
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          variant="yellow-primary"
        >
          + Adicionar Trabalho
        </Button>
      </form>
    </div>
  )
}