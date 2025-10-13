import Layout from "../components/Layout"

const Syllabus = () => {
  return (
    <Layout subtitle="Insira o Plano de Ensino por Matéria">
      <div className="syllabus-container">

        <h2>Faça upload do plano de ensino por matéria</h2>

        <form className="upload-form">

          <div className="input-group">
            <label htmlFor="syllabus-calc">Cálculo I (Selecione o Arquivo)</label>
            <input
              type="file"
              id="syllabus-calc"
              name="syllabus-calc"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="syllabus-prog">Introdução à Programação (Selecione o Arquivo)</label>
            <input
              type="file"
              id="syllabus-prog"
              name="syllabus-prog"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="syllabus-fisica">Física Experimental (Selecione o Arquivo)</label>
            <input
              type="file"
              id="syllabus-fisica"
              name="syllabus-fisica"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="syllabus-port">Língua Portuguesa (Selecione o Arquivo)</label>
            <input
              type="file"
              id="syllabus-port"
              name="syllabus-port"
              required
            />
          </div>

          <button type="submit" className="upload-button">
            Salvar
          </button>
        </form>

        <hr className="form-divider" />

        <h2>Ou insira manualmente</h2>

        <form className="syllabus-form">

          {/* NOVO: SELECT DE MATÉRIA */}
          <div className="input-group">
            <label htmlFor="course-select">Selecione a Matéria para Inserir Dados</label>
            <select
              id="course-select"
              name="course-select"
              required
            >
              <option value="">-- Escolha a Matéria --</option>
              <option value="calculo-i">Cálculo I</option>
              <option value="programacao">Introdução à Programação</option>
              <option value="fisica">Física Experimental</option>
              <option value="portuguesa">Língua Portuguesa</option>
            </select>
          </div>
          <hr className="minor-divider" />

          <h3>Trabalhos</h3>

          <div className="input-group">
            <label htmlFor="assignment-1-name">Trabalho 1 (Nome)</label>
            <input
              type="text"
              id="assignment-1-name"
              name="assignment-1-name"
              placeholder="Ex: Projeto Final"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="assignment-1-date">Data de Entrega</label>
            <input
              type="date"
              id="assignment-1-date"
              name="assignment-1-date"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="assignment-1-file">Upload do Arquivo do Trabalho</label>
            <input
              type="file"
              id="assignment-1-file"
              name="assignment-1-file"
            />
          </div>

          <button type="button" className="add-item-button add-assignment">
            + Adicionar Trabalho
          </button>
          <hr className="minor-divider" />


          <h3>Provas e Material de Apoio</h3>
          <div className="input-group">
            <label htmlFor="exam-1-name">Prova 1 (Nome)</label>
            <input
              type="text"
              id="exam-1-name"
              name="exam-1-name"
              placeholder="Ex: P1 - Avaliação Intermediária"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="exam-1-date">Data da Prova</label>
            <input
              type="date"
              id="exam-1-date"
              name="exam-1-date"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="full-syllabus-files">Upload de PDFs (material referente à essa prova)</label>
            <input
              type="file"
              id="full-syllabus-files"
              name="full-syllabus-files"
              multiple
            />
          </div>

          <button type="button" className="add-item-button add-exam">
            + Adicionar Prova
          </button>
          <hr className="minor-divider" />


          <button type="submit" className="submit-syllabus-button">
            Salvar
          </button>
        </form>

      </div>
    </Layout>
  );
};

export default Syllabus;