import Layout from "../components/Layout"
import NavigationBar from "../containers/NavigationBar"
import Discipline from "../containers/Discipline"
import AddDiscipline from "../containers/AddDiscipline"

const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
const ChevronUp = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>

const Disciplines = () => {
  return (
    <Layout subtitle="Visão Geral das Disciplinas">
      <div className="flex flex-col p-5 gap-6">
        <NavigationBar />
        <div className="w-full flex flex-col md:flex-row md:space-x-8">
          <div className="w-full flex overflow-x-auto space-x-6 pb-4">
            <Discipline />
            <Discipline />
            <Discipline />
            <Discipline />
            <AddDiscipline />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Disciplines





