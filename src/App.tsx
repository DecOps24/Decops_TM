import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css'


export default function App() {
  return (
    <Router>
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}