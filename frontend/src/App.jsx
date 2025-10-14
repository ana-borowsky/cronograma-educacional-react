import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import SingUp from './pages/SingUp.jsx'
import RoomSchedule from './pages/RoomSchedule.jsx'
import Disciplines from './pages/Disciplines.jsx'
import ToDoList from './pages/ToDoList.jsx'
import ScheduleAndTasks from './pages/ScheduleAndTasks.jsx'
import Syllabus from './pages/Syllabus.jsx'
import CourseList from './pages/CourseList.jsx'
import StudySchedule from './pages/StudySchedule.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/roomschedule" element={<RoomSchedule />} />
          <Route path="/disciplines" element={<Disciplines />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/scheduleandtasks" element={<ScheduleAndTasks />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/courselist" element={<CourseList />} />
          <Route path="/studyschedule" element={<StudySchedule />} />
        </Routes>
      </Router>
  );
};

export default App