import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const Syllabus = () => {
  return (
    <Layout subtitle="Nesta página, você deverá adicionar todos os trabalhos, provas e datas importantes para cada matéria. Você pode fazer isso de forma automática ao inserir o plano de ensino, ou manualmente.">
      <div className="syllabus-container">

        <h2>Faça upload do plano de ensino por matéria</h2>

        <form className="upload-form">

          <div className="input-group">
            <label htmlFor="syllabus-calc">Cálculo I (Selecione o Arquivo)</label>
            <input
              type="file"
              id="syllabus-calc"
              name="syllabus-calc"
            />
          </div>

          <div className="input-group">
            <label htmlFor="syllabus-prog">Introdução à Programação (Selecione o Arquivo)</label>
            <input
              type="file"
              id="syllabus-prog"
              name="syllabus-prog"
            />
          </div>

          <div className="input-group">
            <label htmlFor="syllabus-fisica">Física Experimental (Selecione o Arquivo)</label>
            <input
              type="file"
              id="syllabus-fisica"
              name="syllabus-fisica"
            />
          </div>

          <div className="input-group">
            <label htmlFor="syllabus-port">Língua Portuguesa (Selecione o Arquivo)</label>
            <input
              type="file"
              id="syllabus-port"
              name="syllabus-port"
            />
          </div>

          <Link to="/home" className="auth-link">
            Salvar
          </Link>

        </form>

        <hr className="form-divider" />

        <h2>Ou insira manualmente</h2>

        <form className="syllabus-form">

          <div className="input-group">
            <label htmlFor="course-select">Selecione a Matéria para Inserir Dados</label>
            <select
              id="course-select"
              name="course-select"
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
            />
          </div>
          <div className="input-group">
            <label htmlFor="assignment-1-hours">Duração Estimada (Horas)</label>
            <input
              type="number"
              id="assignment-1-hours"
              name="assignment-1-hours"
              placeholder="Ex: 10"
              min="1"
            />
          </div>
          <div className="input-group">
            <label htmlFor="assignment-1-date">Data de Entrega</label>
            <input
              type="date"
              id="assignment-1-date"
              name="assignment-1-date"
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
            />
          </div>
          <div className="input-group">
            <label htmlFor="exam-1-date">Data da Prova</label>
            <input
              type="date"
              id="exam-1-date"
              name="exam-1-date"
            />
          </div>
          <div className="input-group">
            <label htmlFor="full-syllabus-files">Upload de PDFs (material referente à essa prova)</label>
            <input
              type="file"
              id="full-syllabus-files"
              name="full-syllabus-files"
            />
          </div>

          <button type="button" className="add-item-button add-exam">
            + Adicionar Prova
          </button>
          <hr className="minor-divider" />

          <Link to="/home" className="auth-link">
            Salvar
          </Link>
        </form>

      </div>
    </Layout>
  );
};

export default Syllabus;