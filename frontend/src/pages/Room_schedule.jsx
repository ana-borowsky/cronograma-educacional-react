import Layout from "../components/Layout"

const Room_schedule = () => {
  return (
    <Layout subtitle="Insira seu ensalamento">
      <div className="schedule-container">

        <h2>Upload de Arquivo</h2>
        <form className="upload-form">
          <p>Carregue um arquivo (ex: print) contendo a lista de matérias, salas e horários.</p>

          <div className="input-group">
            <label htmlFor="file-upload">Selecione o Arquivo do Ensalamento</label>
            <input
              type="file"
              id="file-upload"
              name="schedule-file"
              required
            />
          </div>

          <button type="submit" className="upload-button">
            Enviar e Processar Arquivo
          </button>
        </form>

        <hr className="divider" />

        <h2>Ou insira manualmente</h2>
        <form className="manual-form">

          <div className="input-group">
            <label htmlFor="course-name">Nome da Matéria</label>
            <input
              type="text"
              id="course-name"
              name="course-name"
              placeholder="Ex: Cálculo I"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="room-name">Sala / Local</label>
            <input
              type="text"
              id="room-name"
              name="room-name"
              placeholder="Ex: Sala B-205 ou Laboratório de Física"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="schedule-time">Horário e Dia</label>
            <input
              type="text"
              id="schedule-time"
              name="schedule-time"
              placeholder="Ex: Segunda e Quarta, 19:00 - 21:00"
              required
            />
          </div>

          <button type="submit" className="manual-submit-button">
            Adicionar Matéria ao Ensalamento
          </button>
        </form>

      </div>
    </Layout>
  );
};

export default Room_schedule;