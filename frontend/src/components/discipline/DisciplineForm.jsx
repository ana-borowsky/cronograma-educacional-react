import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * * @param {object} props
 * @param {object} [props.disciplineData]
 */
export const DisciplineForm = ({ disciplineData }) => {
  const isEditing = !!disciplineData;
  const mainButtonText = isEditing ? 'Salvar Disciplina' : 'Adicionar Matéria';

  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="course-name" className="block text-neutral-300 font-semibold text-sm">Nome da Matéria</label>
        <Input type="text" id="course-name" name="course-name" placeholder="Ex: Cálculo I" required variant="dark" defaultValue="" />
      </div>

      <div className="space-y-1">
        <label htmlFor="room-name" className="block text-neutral-300 font-semibold text-sm">Sala / Local</label>
        <Input type="text" id="room-name" name="room-name" placeholder="Ex: Sala B-205 ou Laboratório de Física" required variant="dark" />
      </div>
      <div className="space-y-1">
        <label htmlFor="schedule-time" className="block text-neutral-300 font-semibold text-sm">Horário e Dia</label>
        <Input type="text" id="schedule-time" name="schedule-time" placeholder="Ex: Segunda e Quarta, 19:00 - 21:00" required variant="dark" />
      </div>
      <div className="space-y-1">
        <label htmlFor="file-upload-manual" className="block text-neutral-300 font-semibold text-sm">Selecione o arquivo de plano de ensino da matéria</label>
        <Input type="file" id="file-upload-manual" name="schedule-file" required variant="dark" className="file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
      </div>
      <Button className="w-full" asChild variant="yellow-primary">
        <a href="/disciplines">{mainButtonText}</a>
      </Button>
    </form>
  )
}
