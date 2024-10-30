import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Import halaman Home
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Info from './pages/Info';
import Contact from './pages/Contact'; // Import halaman Contact
import About from './pages/About'; // Import halaman About

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Tambahkan rute untuk Home */}
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/info" element={<Info />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
