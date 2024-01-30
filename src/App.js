import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar />
     </Router>
     <Home />
     <br />
     <About />
     <br />
     <Projects />
     <br />
     <Resume />
     <br />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
