import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <p className="contact__text">e-mail</p>
      <a href="mailto:marcin.tichoniuk1@gmail.com" className="contact__link">marcin.tichoniuk1@gmail.com</a>
      <p className="contact__text">find me</p>
      <div className="contact__icons">
        <a href="https://www.linkedin.com/in/marcin-tichoniuk-774a48190" className="contact__link contact__link-icon"><FaLinkedin className="contact__icon" /></a>
      </div>
    </section>
  );
}

export default Contact;