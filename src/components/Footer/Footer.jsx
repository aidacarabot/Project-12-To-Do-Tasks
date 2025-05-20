import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Created by <a href="https://github.com/aidacarabot" target="_blank" rel="noopener noreferrer">Aida Carabot Tosar</a></p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer