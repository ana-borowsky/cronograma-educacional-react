import { Button } from "@/components/ui/button"

const XMark = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>

export const ExamForm = ({ onClose }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault()

    onClose()
  };

  const uploadedFiles = [
    'Notas_Aula_Derivadas.pdf',
    'Exemplos_Integrais.docx',
  ];

  return (
    <div
      className="bg-neutral-800 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 border border-neutral-700"
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title-exam"
    >

      <div className="p-5 border-b border-neutral-700 flex justify-between items-center">
        <h3 id="modal-title-exam" className="text-xl font-bold text-white">Adicionar Nova Prova/Avaliação</h3>
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
          <input
            type="text"
            placeholder="Nome da Prova/Avaliação (Ex: P1 - Unidade 1)"
            className="w-full p-3 border border-neutral-600 rounded-lg bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="modal-p-date" className="text-neutral-400 text-xs mb-1 font-medium">Data da Prova</label>
          <input
            type="date"
            id="modal-p-date"
            title="Data da Prova"
            className="w-full p-3 border border-neutral-600 rounded-lg bg-neutral-700 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="modal-p-file" className="text-neutral-400 text-xs mb-1 font-medium">Upload de Arquivos (Material/Escopo)</label>
          <input
            type="file"
            id="modal-p-file"
            name="modal-p-file"
            multiple
            className="w-full p-2 border border-neutral-600 rounded-lg bg-neutral-700 text-neutral-300 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-500 cursor-pointer"
          />
        </div>

        <div className="p-3 bg-neutral-700 rounded-md border border-neutral-600">
          <h4 className="text-neutral-300 font-semibold mb-2 text-sm">Arquivos Enviados:</h4>
          <ul className="space-y-1 text-neutral-400 text-xs">
            {uploadedFiles.map((fileName, index) => (
              <li key={index} className="flex items-center gap-1.5 truncate">
                <span role="img" aria-label="File Icon">{fileName.endsWith('.pdf') ? '📕' : '📄'}</span>
                {fileName}
              </li>
            ))}
          </ul>
        </div>

        <Button
          type="submit"
          className="w-full py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-500 transition duration-200 text-base shadow-md"
        >
          + Adicionar Prova
        </Button>
      </form>
    </div>
  )
}
