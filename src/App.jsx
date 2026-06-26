import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Portfolio from './components/Portfolio';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Portfolio />
      <Locations />
      <Footer />
    </>
  );
}

export default App;
