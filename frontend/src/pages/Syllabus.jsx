import Layout from "../components/Layout"

const Syllabus = () => {
  return (
    <Layout subtitle="Insira o Plano de Ensino por Matéria">
      <div className="syllabus-container">

        <h2>Faça upload do plano de ensino da matéria</h2>

        <form className="upload-form">
          <div className="input-group">
            <label htmlFor="syllabus-file">Selecione o Arquivo (.pdf, .doc, etc.)</label>
            <input
              type="file"
              id="syllabus-file"
              name="syllabus-file"
              required
            />
          </div>
          <button type="submit" className="upload-button">
            Enviar Arquivo
          </button>
        </form>

        <hr className="form-divider" />

        <h2>Ou insira manualmente</h2>

        <form className="syllabus-form">

          <h3>Nome da Matéria</h3>
          <div className="input-group">
            <label htmlFor="course-name">Nome da Matéria</label>
            <input
              type="text"
              id="course-name"
              name="course-name"
              placeholder="Ex: Introdução à Programação"
              required
            />
          </div>

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

          <h3>Provas</h3>
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

          <button type="submit" className="submit-syllabus-button">
            Salvar Plano de Ensino
          </button>
        </form>

      </div>
    </Layout>
  );
};

export default Syllabus;