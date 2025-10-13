import Layout from "../components/Layout"
import { Link } from "react-router-dom";

const Disciplines = () => {
  return (
    <Layout subtitle="Visão Geral das Disciplinas">
      <div className="main-content-layout disciplines-content">

        <div className="sidebar-menu panel-style">

          <Link to="/todolist" className="sidebar-link">
            <span role="img" aria-label="Visão Geral">🏠</span>
            <span className="link-text">Visão Geral (Hoje)</span>
          </Link>

          <Link to="/scheduleandtasks" className="sidebar-link">
            <span role="img" aria-label="Cronograma">📅</span>
            <span className="link-text">Cronograma</span>
          </Link>

          <Link to="/roomschedule" className="sidebar-link">
            <span role="img" aria-label="Ensalamento">🏫</span>
            <span className="link-text">Ensalamento</span>
          </Link>

          <Link to="/syllabus" className="sidebar-link">
            <span role="img" aria-label="Plano de Ensino">📚</span>
            <span className="link-text">Plano de Ensino</span>
          </Link>

          <Link to="/studyschedule" className="sidebar-link">
            <span role="img" aria-label="Horas para estudo">⏳</span>
            <span className="link-text">Horas para estudo</span>
          </Link>

          <Link to="/disciplines" className="sidebar-link active-link">
            <span role="img" aria-label="Disciplinas">📋</span>
            <span className="link-text">Disciplinas</span>
          </Link>

        </div>

        <div className="disciplines-container">

          <div className="discipline-panel">
            <h2 className="discipline-title">Cálculo I</h2>

            <div className="section activities-section">
              <h3>Atividades e Trabalhos</h3>
              <ul className="activity-list">
                <li className="activity-item" data-hours="5h">Revisão Bibliográfica (Entrega: 05/Nov) | Duração: 5h</li>
                <li className="activity-item completed" data-hours="8h">Estudo de Caso #1 (Concluído) | Duração: 8h</li>
                <li className="activity-item" data-hours="3h">Lista de Exercícios 1 (Entrega: 20/Out) | Duração: 3h</li>
                <li className="activity-item" data-hours="10h">Projeto Integrador (Entrega: 01/Dez) | Duração: 10h</li>
              </ul>

              <hr className="minor-divider" />
              <p className="add-form-title">Adicionar Novo Trabalho</p>
              <form className="add-form activity-form">
                <div className="input-group">
                  <input type="text" placeholder="Nome do Trabalho" className="add-input" required />
                </div>
                <div className="input-group">
                  <input type="number" placeholder="Duração Estimada (Horas)" className="add-input hours-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="calc-t-date" className="add-label">Data de Entrega</label>
                  <input type="date" id="calc-t-date" title="Data de Entrega" className="date-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="calc-t-file" className="add-label">Upload do Arquivo do Trabalho</label>
                  <input type="file" id="calc-t-file" name="calc-t-file" className="file-input" />
                </div>
                <button type="submit" className="add-button primary-btn">+ Adicionar Trabalho</button>
              </form>
            </div>

            <hr className="section-divider" />

            <div className="section exams-section">
              <h3>Provas e Avaliações</h3>
              <ul className="exam-list">
                <li className="exam-item">P1 - Unidade 1 (Data: 15/Out)</li>
                <li className="exam-item">P2 - Unidade 2 (Data: 19/Nov)</li>
                <li className="exam-item">Exame Final (Data: 10/Dez)</li>
                <li className="exam-item">Mini-Teste Derivadas (Data: 01/Nov)</li>
              </ul>

              <hr className="minor-divider" />
              <p className="add-form-title">Adicionar Nova Prova</p>
              <form className="add-form exam-form">
                <div className="input-group">
                  <input type="text" placeholder="Nome da Prova/Avaliação" className="add-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="calc-p-date" className="add-label">Data da Prova</label>
                  <input type="date" id="calc-p-date" title="Data da Prova" className="date-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="calc-p-file" className="add-label">Upload de PDFs (Material)</label>
                  <input type="file" id="calc-p-file" name="calc-p-file" multiple className="file-input" />
                </div>

                <div className="uploaded-files-container">
                  <h4>Arquivos Enviados:</h4>
                  <ul className="uploaded-files-list">
                    <li className="uploaded-file-item">
                      <span role="img" aria-label="PDF Icon">📕</span>
                      Notas_Aula_Derivadas.pdf
                    </li>
                    <li className="uploaded-file-item">
                      <span role="img" aria-label="Document Icon">📄</span>
                      Exemplos_Integrais.docx
                    </li>
                  </ul>
                </div>

                <button type="submit" className="add-button secondary-btn">+ Adicionar Prova</button>
              </form>
            </div>
          </div>

          <div className="discipline-panel">
            <h2 className="discipline-title">Introdução à Programação</h2>

            <div className="section activities-section">
              <h3>Atividades e Trabalhos</h3>
              <ul className="activity-list">
                <li className="activity-item" data-hours="15h">Projeto 1 - Site Pessoal (Entrega: 20/Out) | Duração: 15h</li>
                <li className="activity-item completed" data-hours="2h">Quiz de Variáveis (Concluído) | Duração: 2h</li>
                <li className="activity-item" data-hours="7h">Entrega do Módulo 3 (Entrega: 10/Nov) | Duração: 7h</li>
                <li className="activity-item" data-hours="20h">Projeto Final - App (Entrega: 15/Dez) | Duração: 20h</li>
              </ul>

              <hr className="minor-divider" />
              <p className="add-form-title">Adicionar Novo Trabalho</p>
              <form className="add-form activity-form">
                <div className="input-group">
                  <input type="text" placeholder="Nome do Trabalho" className="add-input" required />
                </div>
                <div className="input-group">
                  <input type="number" placeholder="Duração Estimada (Horas)" className="add-input hours-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="prog-t-date" className="add-label">Data de Entrega</label>
                  <input type="date" id="prog-t-date" title="Data de Entrega" className="date-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="prog-t-file" className="add-label">Upload do Arquivo do Trabalho</label>
                  <input type="file" id="prog-t-file" name="prog-t-file" className="file-input" />
                </div>
                <button type="submit" className="add-button primary-btn">+ Adicionar Trabalho</button>
              </form>
            </div>

            <hr className="section-divider" />

            <div className="section exams-section">
              <h3>Provas e Avaliações</h3>
              <ul className="exam-list">
                <li className="exam-item">Teste Lógica (Data: 25/Out)</li>
                <li className="exam-item">Prova Teórica Final (Data: 05/Dez)</li>
                <li className="exam-item">Avaliação de Sintaxe (Data: 10/Nov)</li>
                <li className="exam-item">Mini-Teste Funções (Data: 20/Nov)</li>
              </ul>

              <hr className="minor-divider" />
              <p className="add-form-title">Adicionar Nova Prova</p>
              <form className="add-form exam-form">
                <div className="input-group">
                  <input type="text" placeholder="Nome da Prova/Avaliação" className="add-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="prog-p-date" className="add-label">Data da Prova</label>
                  <input type="date" id="prog-p-date" title="Data da Prova" className="date-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="prog-p-file" className="add-label">Upload de PDFs (Material)</label>
                  <input type="file" id="prog-p-file" name="prog-p-file" multiple className="file-input" />
                </div>

                <div className="uploaded-files-container">
                  <h4>Arquivos Enviados:</h4>
                  <ul className="uploaded-files-list">
                    <li className="uploaded-file-item">
                      <span role="img" aria-label="PDF Icon">📕</span>
                      Aula_01_Logica.pdf
                    </li>
                    <li className="uploaded-file-item">
                      <span role="img" aria-label="PDF Icon">📕</span>
                      Guia_Referencia_JS.pdf
                    </li>
                  </ul>
                </div>

                <button type="submit" className="add-button secondary-btn">+ Adicionar Prova</button>
              </form>
            </div>
          </div>

          <div className="discipline-panel">
            <h2 className="discipline-title">Física Experimental</h2>

            <div className="section activities-section">
              <h3>Atividades e Trabalhos</h3>
              <ul className="activity-list">
                <li className="activity-item" data-hours="6h">Relatório Lab 3 (Entrega: 10/Nov) | Duração: 6h</li>
                <li className="activity-item" data-hours="2h">Questionário Online (Entrega: 01/Nov) | Duração: 2h</li>
                <li className="activity-item" data-hours="4h">Fichas de Exercício (Entrega: 28/Out) | Duração: 4h</li>
                <li className="activity-item" data-hours="12h">Relatório de Projeto Final (Entrega: 08/Dez) | Duração: 12h</li>
              </ul>

              <hr className="minor-divider" />
              <p className="add-form-title">Adicionar Novo Trabalho</p>
              <form className="add-form activity-form">
                <div className="input-group">
                  <input type="text" placeholder="Nome do Trabalho" className="add-input" required />
                </div>
                <div className="input-group">
                  <input type="number" placeholder="Duração Estimada (Horas)" className="add-input hours-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="fisica-t-date" className="add-label">Data de Entrega</label>
                  <input type="date" id="fisica-t-date" title="Data de Entrega" className="date-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="fisica-t-file" className="add-label">Upload do Arquivo do Trabalho</label>
                  <input type="file" id="fisica-t-file" name="fisica-t-file" className="file-input" />
                </div>
                <button type="submit" className="add-button primary-btn">+ Adicionar Trabalho</button>
              </form>
            </div>

            <hr className="section-divider" />

            <div className="section exams-section">
              <h3>Provas e Avaliações</h3>
              <ul className="exam-list">
                <li className="exam-item">Mini-Teste 2 (Data: 28/Out)</li>
                <li className="exam-item">Prova Parcial 2 (Data: 20/Nov)</li>
                <li className="exam-item">Prova Geral (Data: 15/Dez)</li>
              </ul>

              <hr className="minor-divider" />
              <p className="add-form-title">Adicionar Nova Prova</p>
              <form className="add-form exam-form">
                <div className="input-group">
                  <input type="text" placeholder="Nome da Prova/Avaliação" className="add-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="fisica-p-date" className="add-label">Data da Prova</label>
                  <input type="date" id="fisica-p-date" title="Data da Prova" className="date-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="fisica-p-file" className="add-label">Upload de PDFs (Material)</label>
                  <input type="file" id="fisica-p-file" name="fisica-p-file" multiple className="file-input" />
                </div>

                <div className="uploaded-files-container">
                  <h4>Arquivos Enviados:</h4>
                  <ul className="uploaded-files-list">
                    <li className="uploaded-file-item">
                      <span role="img" aria-label="PDF Icon">📕</span>
                      Apostila_Cap_7_Eletricidade.pdf
                    </li>
                  </ul>
                </div>

                <button type="submit" className="add-button secondary-btn">+ Adicionar Prova</button>
              </form>
            </div>
          </div>

          <div className="discipline-panel">
            <h2 className="discipline-title">Língua Portuguesa e Comunicação</h2>

            <div className="section activities-section">
              <h3>Atividades e Trabalhos</h3>
              <ul className="activity-list">
                <li className="activity-item" data-hours="8h">Artigo de Opinião (Entrega: 12/Nov) | Duração: 8h</li>
                <li className="activity-item completed" data-hours="4h">Análise Textual (Concluído) | Duração: 4h</li>
                <li className="activity-item" data-hours="5h">Resenha de Filme (Entrega: 01/Dez) | Duração: 5h</li>
                <li className="activity-item" data-hours="3h">Exercícios de Sintaxe (Entrega: 05/Nov) | Duração: 3h</li>
              </ul>

              <hr className="minor-divider" />
              <p className="add-form-title">Adicionar Novo Trabalho</p>
              <form className="add-form activity-form">
                <div className="input-group">
                  <input type="text" placeholder="Nome do Trabalho" className="add-input" required />
                </div>
                <div className="input-group">
                  <input type="number" placeholder="Duração Estimada (Horas)" className="add-input hours-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="port-t-date" className="add-label">Data de Entrega</label>
                  <input type="date" id="port-t-date" title="Data de Entrega" className="date-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="port-t-file" className="add-label">Upload do Arquivo do Trabalho</label>
                  <input type="file" id="port-t-file" name="port-t-file" className="file-input" />
                </div>
                <button type="submit" className="add-button primary-btn">+ Adicionar Trabalho</button>
              </form>
            </div>

            <hr className="section-divider" />

            <div className="section exams-section">
              <h3>Provas e Avaliações</h3>
              <ul className="exam-list">
                <li className="exam-item">Avaliação de Gramática (Data: 01/Nov)</li>
                <li className="exam-item">Avaliação de Redação (Data: 30/Nov)</li>
                <li className="exam-item">Apresentação Oral (Data: 20/Dez)</li>
              </ul>

              <hr className="minor-divider" />
              <p className="add-form-title">Adicionar Nova Prova</p>
              <form className="add-form exam-form">
                <div className="input-group">
                  <input type="text" placeholder="Nome da Prova/Avaliação" className="add-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="port-p-date" className="add-label">Data da Prova</label>
                  <input type="date" id="port-p-date" title="Data da Prova" className="date-input" required />
                </div>
                <div className="input-group">
                  <label htmlFor="port-p-file" className="add-label">Upload de PDFs (Material)</label>
                  <input type="file" id="port-p-file" name="port-p-file" multiple className="file-input" />
                </div>

                <div className="uploaded-files-container">
                  <h4>Arquivos Enviados:</h4>
                  <ul className="uploaded-files-list">
                    <li className="uploaded-file-item">
                      <span role="img" aria-label="Document Icon">📄</span>
                      Guia_Redacao_Final.docx
                    </li>
                    <li className="uploaded-file-item">
                      <span role="img" aria-label="PDF Icon">📕</span>
                      Verbos_e_Concordancia.pdf
                    </li>
                    <li className="uploaded-file-item">
                      <span role="img" aria-label="Document Icon">📄</span>
                      Exemplos_Argumentacao.pptx
                    </li>
                  </ul>
                </div>

                <button type="submit" className="add-button secondary-btn">+ Adicionar Prova</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Disciplines;