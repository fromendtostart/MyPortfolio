import './App.css';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
