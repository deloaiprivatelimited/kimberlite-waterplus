import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/header/Navbar'
import About from './pages/About'
import Footer from './components/footer/Footer'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Careers from './pages/Careers'
import MembraneTreatment from './pages/MembraneTreatment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <MembraneTreatment />
        <Footer />
      </div>
    </>
  )
}

export default App
