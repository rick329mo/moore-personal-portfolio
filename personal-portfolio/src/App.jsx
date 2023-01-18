import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import "./styles.css"

function App() {
 return (
    <div className='flex'>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} /> 
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutme">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default App
