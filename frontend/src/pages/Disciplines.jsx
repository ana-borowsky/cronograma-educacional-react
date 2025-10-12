import Layout from "../components/Layout"

const Disciplines = () => {
  return (
    <Layout subtitle="Visão Geral das Disciplinas">
      <div className="disciplines-container">
        <div className="discipline-panel">
          <h2 className="discipline-title">Cálculo I</h2>
          <div className="section activities-section">
            <h3>Atividades e Trabalhos</h3>
            <ul className="activity-list">
              <li className="activity-item">Revisão Bibliográfica (Entrega: 05/Nov)</li>
              <li className="activity-item completed">Estudo de Caso #1 (Concluído)</li>
            </ul>
            <form className="add-form activity-form">
              <input type="text" placeholder="Nova Atividade/Trabalho" className="add-input" />
              <input type="date" title="Data de Entrega" className="date-input" />
              <button type="submit" className="add-button primary-btn">+ Add</button>
            </form>
          </div>
          <hr className="section-divider" />
          <div className="section exams-section">
            <h3>Provas e Avaliações</h3>
            <ul className="exam-list">
              <li className="exam-item">P1 - Unidade 1 (Data: 15/Out)</li>
              <li className="exam-item">Exame Final (Data: 10/Dez)</li>
            </ul>
            <form className="add-form exam-form">
              <input type="text" placeholder="Nova Prova/Avaliação" className="add-input" />
              <input type="date" title="Data da Prova" className="date-input" />
              <button type="submit" className="add-button secondary-btn">+ Add</button>
            </form>
          </div>
        </div>
        <div className="discipline-panel">
          <h2 className="discipline-title">Introdução à Programação</h2>
          <div className="section activities-section">
            <h3>Atividades e Trabalhos</h3>
            <ul className="activity-list">
              <li className="activity-item">Projeto 1 - Site Pessoal (Entrega: 20/Out)</li>
              <li className="activity-item completed">Quiz de Variáveis (Concluído)</li>
            </ul>
            <form className="add-form activity-form">
              <input type="text" placeholder="Nova Atividade/Trabalho" className="add-input" />
              <input type="date" title="Data de Entrega" className="date-input" />
              <button type="submit" className="add-button primary-btn">+ Add</button>
            </form>
          </div>
          <hr className="section-divider" />
          <div className="section exams-section">
            <h3>Provas e Avaliações</h3>
            <ul className="exam-list">
              <li className="exam-item">Teste Lógica (Data: 25/Out)</li>
              <li className="exam-item">Prova Teórica Final (Data: 05/Dez)</li>
            </ul>
            <form className="add-form exam-form">
              <input type="text" placeholder="Nova Prova/Avaliação" className="add-input" />
              <input type="date" title="Data da Prova" className="date-input" />
              <button type="submit" className="add-button secondary-btn">+ Add</button>
            </form>
          </div>
        </div>
        <div className="discipline-panel">
          <h2 className="discipline-title">Física Experimental</h2>
          <div className="section activities-section">
            <h3>Atividades e Trabalhos</h3>
            <ul className="activity-list">
              <li className="activity-item">Relatório Lab 3 (Entrega: 10/Nov)</li>
              <li className="activity-item">Questionário Online (Entrega: 01/Nov)</li>
            </ul>
            <form className="add-form activity-form">
              <input type="text" placeholder="Nova Atividade/Trabalho" className="add-input" />
              <input type="date" title="Data de Entrega" className="date-input" />
              <button type="submit" className="add-button primary-btn">+ Add</button>
            </form>
          </div>
          <hr className="section-divider" />
          <div className="section exams-section">
            <h3>Provas e Avaliações</h3>
            <ul className="exam-list">
              <li className="exam-item">Mini-Teste 2 (Data: 28/Out)</li>
              <li className="exam-item">Prova Geral (Data: 15/Dez)</li>
            </ul>
            <form className="add-form exam-form">
              <input type="text" placeholder="Nova Prova/Avaliação" className="add-input" />
              <input type="date" title="Data da Prova" className="date-input" />
              <button type="submit" className="add-button secondary-btn">+ Add</button>
            </form>
          </div>
        </div>
        <div className="discipline-panel">
          <h2 className="discipline-title">Língua Portuguesa e Comunicação</h2>
          <div className="section activities-section">
            <h3>Atividades e Trabalhos</h3>
            <ul className="activity-list">
              <li className="activity-item">Artigo de Opinião (Entrega: 12/Nov)</li>
              <li className="activity-item completed">Análise Textual (Concluído)</li>
            </ul>
            <form className="add-form activity-form">
              <input type="text" placeholder="Nova Atividade/Trabalho" className="add-input" />
              <input type="date" title="Data de Entrega" className="date-input" />
              <button type="submit" className="add-button primary-btn">+ Add</button>
            </form>
          </div>
          <hr className="section-divider" />
          <div className="section exams-section">
            <h3>Provas e Avaliações</h3>
            <ul className="exam-list">
              <li className="exam-item">Avaliação de Gramática (Data: 01/Nov)</li>
              <li className="exam-item">Apresentação Oral (Data: 20/Dez)</li>
            </ul>
            <form className="add-form exam-form">
              <input type="text" placeholder="Nova Prova/Avaliação" className="add-input" />
              <input type="date" title="Data da Prova" className="date-input" />
              <button type="submit" className="add-button secondary-btn">+ Add</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Disciplines;