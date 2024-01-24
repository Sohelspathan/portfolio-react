import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay'
import ContactUS from './pages/ContactUs'
import DesktopMessage from './components/DesktopMessage';

import './App.css'

function App() {
  

  return (
    <>
      <div className="App">
      <DesktopMessage />
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/contactus" element={<ContactUS />}></Route>
            <Route path='/project/:id' element={<ProjectDisplay/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App
