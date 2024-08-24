import NavBar from './components/NavBar/Navbar.jsx';
import Intro from './components/NavBar/Intro/Intro.jsx';
import Skills from "./components/Skill/Skills.jsx";
import Works from "./components/Work/Works.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
