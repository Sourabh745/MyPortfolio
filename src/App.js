import './App.scss';

// Importing components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

// Importing route components
import Intro from './components/About/RouteComponents/Intro';
import Experience from './components/About/RouteComponents/Experience';
import Internships from './components/About/RouteComponents/Internships';
import Graduation from './components/About/RouteComponents/Graduation';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Works />
              <About />
              <Skill />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Nested routes for "About" */}
        <Route path="/about/intro" element={<Intro />} />
        <Route path="/about/experience" element={<Experience />} />
        <Route path="/about/internships" element={<Internships />} />
        <Route path="/about/graduation" element={<Graduation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
