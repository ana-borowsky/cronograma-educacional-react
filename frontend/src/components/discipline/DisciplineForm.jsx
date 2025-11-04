import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * @param {object} props
 * @param {object} [props.disciplineData]
 * @param {Function} [props.onCancel]
 * @param {Function} [props.onDelete]
 * @param {Function} [props.onSave]
 */
export const DisciplineForm = ({ disciplineData, onCancel, onDelete, onSave }) => {
  const isEditing = !!disciplineData
  const mainButtonText = isEditing ? "Salvar" : "Adicionar Matéria"

  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="course-name" className="block text-neutral-300 font-semibold text-sm">
          Nome da Matéria
        </label>
        <Input
          type="text"
          id="course-name"
          name="course-name"
          placeholder="Ex: Cálculo I"
          required
          variant="dark"
          defaultValue={disciplineData?.name || ""}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="room-name" className="block text-neutral-300 font-semibold text-sm">
          Sala / Local
        </label>
        <Input
          type="text"
          id="room-name"
          name="room-name"
          placeholder="Ex: Sala B-205 ou Laboratório de Física"
          required
          variant="dark"
          defaultValue={disciplineData?.room || ""}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="schedule-time" className="block text-neutral-300 font-semibold text-sm">
          Horário e Dia
        </label>
        <Input
          type="text"
          id="schedule-time"
          name="schedule-time"
          placeholder="Ex: Segunda e Quarta, 19:00 - 21:00"
          required
          variant="dark"
          defaultValue={disciplineData?.schedule || ""}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="file-upload-manual" className="block text-neutral-300 font-semibold text-sm">
          Selecione o arquivo de plano de ensino da matéria
        </label>
        <Input
          type="file"
          id="file-upload-manual"
          name="schedule-file"
          required
          variant="dark"
          className="file:bg-neutral-600 file:text-white hover:file:bg-neutral-500"
        />
      </div>

      {isEditing ? (
        <div className="flex justify-between gap-3 pt-3">
          <Button type="button" variant="destructive" className="flex-1" onClick={onDelete}>
            Excluir
          </Button>
          <Button type="submit" variant="yellow-primary" className="flex-1" onClick={onSave}>
            Salvar
          </Button>
        </div>
      ) : (
        <Button type="submit" className="w-full" variant="yellow-primary">
          {mainButtonText}
        </Button>
      )}
    </form>
  )
}
