import Layout from "../components/Layout"
import NavigationBar from "../containers/NavigationBar"
import ToDoList from "../containers/ToDoList"
import Schedule from "../containers/Schedule"

const ScheduleAndTasks = () => {
  return (
    <Layout subtitle="Cronograma Semanal">
      <NavigationBar />
      <div className="flex flex-row p-5 gap-6">   
        <Schedule />
        <ToDoList />
      </div>
    </Layout>
  )
}

export default ScheduleAndTasks