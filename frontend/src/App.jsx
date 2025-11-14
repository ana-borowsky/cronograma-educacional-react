import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Disciplines from './pages/Disciplines.jsx'
import ScheduleAndTasks from './pages/ScheduleAndTasks.jsx'
import Home from './pages/Home.jsx'
import { useLoading } from './context/LoadingContext.jsx'
import { GlobalLoader } from './components/GlobalLoader.jsx'

const App = () => {
  const { loading } = useLoading()  

  return (
    <>
      {loading && <GlobalLoader />}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disciplines" element={<Disciplines />} />
          <Route path="/scheduleandtasks" element={<ScheduleAndTasks />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
