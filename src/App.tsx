import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Terms from './pages/term/TermsConditions'
import Privacy from './pages/privacy/PrivacyPolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  )
}

export default App

