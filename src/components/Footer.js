// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Pastikan Anda membuat file CSS ini juga

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} IndraNews. All rights reserved.</p>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
