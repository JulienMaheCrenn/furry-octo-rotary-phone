import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/contact" element= {<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;