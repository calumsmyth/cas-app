import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Projects from '../../pages/Projects';
import NavBar from './NavBar';
import Hero from '../Hero'
import Footer from '../Footer'

const MyRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
    )
}

export default MyRoutes