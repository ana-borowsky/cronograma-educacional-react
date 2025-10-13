import Layout from "../components/Layout"

const CourseList = () => {
  return (
    <Layout subtitle="Matérias e Ensalamento">
      <div className="course-list-container">
        <h2>Minhas Matérias Cadastradas</h2>

        <div className="courses-list">

          <div className="course-item">
            <div className="course-details">
              <h3 className="course-name">Cálculo I</h3>
              <p className="course-schedule-room">
                <span className="schedule-info">Segunda e Quarta, 19:00 - 21:00</span> / <span className="room-info">Sala B-205</span>
              </p>
            </div>
            <div className="course-actions">
              <button className="action-button edit-button" aria-label="Editar">
                <span role="img" aria-label="lápis">✏️</span>
              </button>
              <button className="action-button delete-button" aria-label="Excluir">
                <span role="img" aria-label="lixeira">🗑️</span>
              </button>
            </div>
          </div>
          <div className="course-item">
            <div className="course-details">
              <h3 className="course-name">Introdução à Programação</h3>
              <p className="course-schedule-room">
                <span className="schedule-info">Terça e Quinta, 19:00 - 21:00</span> / <span className="room-info">Lab de Informática 3</span>
              </p>
            </div>
            <div className="course-actions">
              <button className="action-button edit-button" aria-label="Editar">
                <span role="img" aria-label="lápis">✏️</span>
              </button>
              <button className="action-button delete-button" aria-label="Excluir">
                <span role="img" aria-label="lixeira">🗑️</span>
              </button>
            </div>
          </div>
          <div className="course-item">
            <div className="course-details">
              <h3 className="course-name">Física Experimental</h3>
              <p className="course-schedule-room">
                <span className="schedule-info">Sexta, 19:00 - 22:00</span> / <span className="room-info">Lab de Física 101</span>
              </p>
            </div>
            <div className="course-actions">
              <button className="action-button edit-button" aria-label="Editar">
                <span role="img" aria-label="lápis">✏️</span>
              </button>
              <button className="action-button delete-button" aria-label="Excluir">
                <span role="img" aria-label="lixeira">🗑️</span>
              </button>
            </div>
          </div>
          <div className="course-item">
            <div className="course-details">
              <h3 className="course-name">Língua Portuguesa</h3>
              <p className="course-schedule-room">
                <span className="schedule-info">Quarta, 17:00 - 19:00</span> / <span className="room-info">Sala A-102</span>
              </p>
            </div>
            <div className="course-actions">
              <button className="action-button edit-button" aria-label="Editar">
                <span role="img" aria-label="lápis">✏️</span>
              </button>
              <button className="action-button delete-button" aria-label="Excluir">
                <span role="img" aria-label="lixeira">🗑️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseList;