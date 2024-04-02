import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/header/header';
import Expertises from './pages/expertises/expertises';
import About from './pages/a-propos/a-propos';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';
import './assets/css/App.css';

ReactDOM.render(
  <Router>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Expertises" element={<Expertises />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </Router>,
  document.getElementById('root')
);
