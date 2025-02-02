import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import ImagePopup from './components/ImagePopup';

import saraswatiMata from './images/saraswatiMata.png';


function App() {
  const images =[saraswatiMata]
  return (
    <div>
      <ImagePopup images={images} />

      <Navbar />
      <main className="flex-grow">
        {/* Adjust the padding-top to match navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}



export default App;
