import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingRobot from './components/FloatingRobot'
import AnimatedBackground from './components/AnimatedBackground'

import Home from './pages/Home'
import About from './pages/About'
import Mernmade from './pages/Mernmade'
import HowItWorks from './pages/HowItWorks'
import InterviewTraining from './pages/InterviewTraining'
import CommunicationTraining from './pages/CommunicationTraining'
import Courses from './pages/Courses'
import Batches from './pages/Batches'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Apply from './pages/Apply'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black">
        <AnimatedBackground />
        <Navbar />
        <Toaster />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mernmade" element={<Mernmade />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/interview-training" element={<InterviewTraining />} />
            <Route path="/communication-training" element={<CommunicationTraining />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingRobot />
      </div>
    </Router>
  )
}

export default App
