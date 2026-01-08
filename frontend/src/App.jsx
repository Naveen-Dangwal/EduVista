import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Course from './Courses/Course';
import ScrollToTop from './ScrollToTop';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
// import App2 from './Resume/Resume-Builder-master/src/App2.jsx';
import AdminPortal from './Admin/AdminPortal.jsx';
import StaffPortal from './Staff/StaffPortal.jsx';
import Student from './Student/Student.jsx';
import Dashboard from './Admin/Dashboard.jsx';
import Addbatch from './Admin/Addbatch.jsx';
import Addstudent from './Admin/Addstudent.jsx';
import Addteacher from './Admin/Addteacher.jsx';
import Clanguage from './Courses/Clanguage.jsx';
import FullStack from './Courses/FullStack.jsx';
import Javalanguage from './Courses/Javalanguage.jsx';
import DSAlanguage from './Courses/Dsalanguage.jsx';


function App() {


  return (
    <>
    <BrowserRouter>
  <ScrollToTop />
  <Routes>
    {/* Public Routes */}
    <Route index element={<Home />} />
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Course />}/>
    <Route path="/c" element={<Clanguage/>} />
    <Route path="/fullstack" element={<FullStack/>} />
    <Route path="/java" element={<Javalanguage/>} />
    <Route path="/dsa" element={<DSAlanguage/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    {/* <Route path="/resume" element={<App2 />} /> */}

    {/* Admin Portal Nested Routes */}
    <Route path="/adminportal/" element={<AdminPortal />}>
      <Route index element={<Dashboard />} />
      <Route path="addbatch" element={<Addbatch />} />
      <Route path="addstudents" element={<Addstudent />} />
      <Route path="addteacher" element={<Addteacher />} />
    </Route>

    {/* Staff Portal */}
    <Route path="/staffportal" element={<StaffPortal />} />

    {/* Student Dashboard */}
    <Route path="/student" element={<Student />} />
  </Routes>
</BrowserRouter>

    </>
    
  )
}

export default App
