import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Background from '../components/background/Background';
import './Contact.css';

function Contact() {
  return (
    <div>
    <Navbar />  
    <section className="contact-section">
      <h2 className="section-heading">Contact Us</h2>
      <div className="contact-info">
        <p>
          We'd love to hear from you! Please feel free to reach out to us with
          any questions or feedback.
        </p>
        <ul>
          <li>
            <a href="mailto:info@terrataste.com">info@terrataste.com</a>
          </li>
          <li>
            <a href="tel:(021)7867222">+62 (021)7867222</a>
          </li>
          <li>
            <a href="https://www.facebook.com/ui.ac.id/?locale=id_ID">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/univ_indonesia/?hl=en">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </section>
    </div>
  );
}

export default Contact;
