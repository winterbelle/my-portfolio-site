import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

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
    </div>
  );
}

export default App;
