import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Page Imports
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Careers from './pages/Careers'
import Chemicals from './pages/Chemicals'
import SpecialtyChemicalsOverview from './pages/Specialty Chemicals'

// Component Imports
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import WaterTechnologiesPage from './pages/Technologies'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar stays outside Routes to appear on every page */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            
            {/* Solutions / Products Route */}
            {/* This maps to the consolidated Chemicals page we built */}
            <Route path="/chemicals" element={<Chemicals />} />
            <Route path="/technologies" element={<WaterTechnologiesPage />} />
            <Route path="/specialty-chemicals" element={<SpecialtyChemicalsOverview />} />

            
            {/* If you want to keep the specific Membrane page strictly separate: */}
            {/* <Route path="/membrane-treatment" element={<MembraneTreatment />} /> */}
          </Routes>
        </main>

        {/* Footer stays outside Routes */}
        <Footer />
      </div>
    </Router>
  )
}

export default App