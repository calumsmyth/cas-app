import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MyRoutes from './components/routing/MyRoutes'
import Hero from '../src/components/Hero';
import Footer from './components/Footer';
import NavBar from './components/routing/NavBar'
import HeroTitle from './components/HeroTitle'


function App() {
  return (
    <Router>
      <Hero />

      <NavBar />
            <HeroTitle />
      <MyRoutes />
      <Footer /> 
    </Router>
  );
}

export default App;
