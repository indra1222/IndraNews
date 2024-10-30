// src/pages/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <img src="/contact.jpg" alt="Contact Us" className="contact-image" />
            <h1>Kontak Kami</h1>
            <p>Email: <a href="mailto:contact@indranews.com">indramauludani09@gmai.com</a></p>
            <p>Telepon: 081312276720</p>
            <p>Alamat: Garut, Indonesia</p>
        </div>
    );
};

export default Contact;
