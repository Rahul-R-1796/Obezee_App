// HomePage.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import SettingsPage from './CRUDapp';
import './HomePage.css';

const HomePage = () => {
  return (
    <Router>
      <div className="HomePage">
        <div className="fixed-header">
          <nav>
            <div class="Header-buttons">
              <button >
                <Link to="/">Home</Link>
              </button>
              <button>
                <Link to="/settings">Settings</Link>
              </button>
            </div>
          </nav>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
